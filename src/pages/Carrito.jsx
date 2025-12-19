// import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Carrito({ carrito }) {
  const carritoAgrupado = carrito.reduce((acc, item) => {
  if (!acc[item.id]) {
    acc[item.id] = { ...item, cantidad: 1, subtotal: item.price };
  } else {
    acc[item.id].cantidad++;
    acc[item.id].subtotal += item.price;
  }
  return acc;
  }, {});

  const listaFinal = Object.values(carritoAgrupado);

  const total = listaFinal.reduce((acc, item) => acc + item.subtotal, 0);

  return (
    <div style={{ padding: "20px" }}>
      
      <Button
        to="/"
        titulo="Inicio"
      />

      <h2>🛒 Carrito de Compras</h2>

      {listaFinal.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="carrito-lista">
          {listaFinal.map((item, index) => (
            <>
              <div key={index.id} className="carrito-item">
                <input type="checkbox" name="" id="" />
                <hr />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p><strong>Precio del producto:</strong> {item.price}</p>
                <p>Cantidad: {item.cantidad}</p>
                <strong>Subtotal: ${item.subtotal}</strong>
              </div>
              <br />
            </>
          ))}

          <div className="total">
            <strong> Total: ${total}</strong>
          </div>
          
        </div>
      )}
    </div>
  );
}
