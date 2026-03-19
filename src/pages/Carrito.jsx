// import { Link } from "react-router-dom";
// import Button from "../components/Button";
import ButtonBack from "../components/ButtonBack";
import InputLoginRegister from "../components/InputLoginRegister";

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
    <>

      <div className="div-nav-c">
        <ButtonBack />
        <h4 className="spanc">Tu Carrito de compras</h4>
      </div>
      {listaFinal.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
      <>
        <div className="carrito-lista">
          <h4>Elementos</h4>
          {listaFinal.map((item, index) => (
            <>
              <div key={index.id} className="carrito-item">
                <div></div>
                <div className="products-cards">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>${item.price}</p>
                </div>
                <div className="products-cantidad">
                  -
                  <p>{item.cantidad}</p>
                  +
                </div>
              </div>
              <br />
              <strong>Subtotal: ${item.subtotal}</strong>
            </>
          ))}

          <div className="total">
            <strong> Total: ${total}</strong>
          </div>
        </div>
        <div className="div-input-enter">
          <InputLoginRegister
            className="input-enter"
            type="button"
            value="Confirmar Orden"
          />
        </div>
      </>
      )}
    </>
  );
}
