import Button from "./Button"

export default function Navbar({ carrito }) {
  return (
    <nav>
      <Button to="/carrito">
      </Button>
      {carrito > 0 && <span>{carrito}</span>}
    </nav>
  )
};