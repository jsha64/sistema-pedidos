import { Routes, Route } from "react-router";
import { Inicio } from "../pages/Inicio";
import Carrito from "../pages/Carrito";

export default function AppRoutes({carrito, setCarrito}) {
  return (
    <Routes>
      <Route path="/" element={<Inicio carrito={carrito} setCarrito={setCarrito} />} />
      <Route path="/carrito" element={<Carrito carrito={carrito} />} />
    </Routes>
  );
}
