import { Routes, Route } from "react-router";
import { Inicio } from "../pages/Inicio";
import Carrito from "../pages/Carrito";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function AppRoutes({carrito, setCarrito}) {
  return (
    <Routes>
      <Route path="/" element={<Inicio carrito={carrito} setCarrito={setCarrito} />} />
      <Route path="/carrito" element={<Carrito carrito={carrito} />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
