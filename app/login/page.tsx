"use client";

import { useState } from "react";
import { registerUser, loginUser, logoutUser } from "@/lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [user, setUser] = useState<{ id?: string; email: string } | null>(null);

  const handleRegister = async () => {
    setError("");
    try {
      const newUser = await registerUser(email, password);
      setUser({ email: newUser.user.email || ""});
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleLogin = async () => {
    setError("");
    try {
      const loggedInUser = await loginUser(email, password);

      const res = await fetch("/api/auth/me");
      if(!res.ok) throw new Error("Error obtener el usuario");

      const data = await res.json();

      setUser({ id: data.id, email: data.email });
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setUser(null); // Eliminar usuario del estado
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl text-black font-bold mb-4">Autenticación con Firebase</h1>
      {user ? (
        <div className="bg-white p-4 shadow-md rounded-md">
          <p className="text-green-600">Bienvenido, {user.email}</p>
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Cerrar sesión
          </button>
        </div>
      ) : (
        <div className="bg-white p-4 shadow-md rounded-md">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border text-black p-2 rounded-md w-full mb-2"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border text-black p-2 rounded-md w-full mb-2"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mt-2"
          >
            Iniciar sesión
          </button>
          <button
            onClick={handleRegister}
            className="bg-green-500 text-white px-4 py-2 rounded-md w-full mt-2"
          >
            Registrarse
          </button>
        </div>
      )}
    </div>
  );
}