import Navbar from "./Navbar";
// import { Link } from "react-router-dom";

export default function Header({ carrito }) {
  
  return (
    <header>
      <h1>Sistema de Pedidos</h1>
      <Navbar />
      {/* <nav>
        <Link to="/carrito">
          {carrito}
        </Link>
      </nav> */}
    </header>
  );
}
