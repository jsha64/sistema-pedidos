import { Routes, Route } from "react-router";
import { Inicio } from "../pages/Inicio";
import Carrito from "../pages/Carrito";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<Inicio {...props} />} />
      <Route path="/carrito" element={<Carrito {...props} />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
