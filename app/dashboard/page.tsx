"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  
  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login"); // Redirigir al login después de cerrar sesión
  }
  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/me");
        if (!res.ok) throw new Error("No autenticado");

        const data = await res.json();
        setUserEmail(data.email);
      } catch (error) {
        router.push("/login"); // Redirige si no hay sesión válida
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) return <p>Cargando...</p>;
  if (!userEmail) return null;


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Bienvenido, {userEmail}</h1>
      <p>Este es tu panel de usuario.</p>
      <button
      onClick={handleLogout}
      className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
    >
      Cerrar sesión
    </button>
    </div>
  );
}