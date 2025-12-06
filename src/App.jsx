import { useState } from "react";
import AppRoutes from "./routes/AppRoutes";

export default function App(){
  const [carrito, setCarrito] = useState([]);

  return (
    <>
      <AppRoutes carrito={carrito} setCarrito={setCarrito} />
    </>
  );
};

