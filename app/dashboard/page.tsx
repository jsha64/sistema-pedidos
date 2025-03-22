"use client";

import { useAuth } from "@/lib/AuthContext";
import { Order } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type UserInfo = {
  id: string;
  email: string;
};

export default function Dashboard() {
  const router = useRouter();
  const { user, loading } = useAuth() as { user: UserInfo | null; loading: boolean };
  const [orders, setOrders] = useState<Order[]>([]);
  
  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login"); // Redirigir al login después de cerrar sesión
  }
  
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login"); // Redirige si no está autenticado
    }

    const fetchOrders = async () => {
      try {
        const res = await fetch(`/api/orders?userId=${user?.id}`);
        if (!res.ok) throw new Error("Error al obtener pedidos");

        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (user?.id) {
      fetchOrders();
    }
  }, [user, loading, router]);

  if (loading) return <p>Cargando...</p>;
  if (!user) return <p>No estás autenticado</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Bienvenido, {user.email}</h1>
      <h2 className="text-xl font-semibold mt-4">Tus pedidos:</h2>
      <ul>
        {orders.map((order: Order) => (
          <li key={order.id} className="border p-2 mt-2 rounded">
            Pedido ID: {order.id} - Estado: {order.status}
          </li>
        ))}
      </ul>
      <button
      onClick={handleLogout}
      className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
    >
      Cerrar sesión
    </button>
    </div>
  );
}