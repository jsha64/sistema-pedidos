import AppRoutes from "./routes/AppRoutes";
import useCarrito from "./hooks/useCarrito";

export default function App() {
  const carritoData = useCarrito();

  return (
    <>
      <AppRoutes {...carritoData} />
    </>
  );
}

