import { Link } from "react-router-dom"

export default function Navbar({ carrito }) {
  return (
    <nav>
        <button>
            <Link to="/carrito">
                Ir al pedido
                {carrito}
            </Link>
        </button>
    </nav>
  )
};