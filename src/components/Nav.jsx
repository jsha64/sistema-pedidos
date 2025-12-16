import Navbar from "./Navbar";
// import { Link } from "react-router-dom";

export default function Nav({ carrito }) {
  
  return (
    <>
      <h1>Sistema de Pedidos</h1>
      <Navbar carrito={carrito} />
    </>
  );
}
