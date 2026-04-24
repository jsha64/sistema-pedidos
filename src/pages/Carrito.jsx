// import { Link } from "react-router-dom";
// import Button from "../components/Button";
import ButtonBack from "../components/ButtonBack";
import InputLoginRegister from "../components/InputLoginRegister";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function Carrito({ listaFinal, total, tarifaEnvio, totalFinal, disminuirCantidad, aumentarCantidad }) {
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
          <h3 className="title-apartados">Elementos</h3>
          {listaFinal.map((item) => (
            <div key={item.id}>
              <div className="carrito-item">
                <div></div>
                <div className="products-cards">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>${item.price}</p>
                </div>
                <div className="products-cantidad">
                  <button className="boton-mas-menos" onClick={() => disminuirCantidad(item.id)}>-</button>
                  <p>{item.cantidad}</p>
                  <button className="boton-mas-menos boton-mas" onClick={() => aumentarCantidad(item.id)}>+</button>
                </div>
              </div>
              <br />
            </div>
          ))}

          <div className="carrito-lista carrito-list">
            <h3 className="title-apartados-pedido">Resumen del Pedido</h3>
            <div className="div-subtotal">
              <div className="subtotal">
                <p>Subtotal</p>
                <p className="subtotal-tarifa">${total}</p>
              </div>
              <div className="tarifa">
                <p>Tarifa de Envío</p>
                <p className="subtotal-tarifa">${tarifaEnvio}</p>
              </div>
              <div className="rayita"></div>
              <div className="total">
                <h5 className="total-name">Total:</h5>
                <strong className="total-price">${totalFinal}</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="div-input-enter">
          <div className="total-precio">
            <h5 className="total-precio-h6">Total</h5>
            <span className="total-precio-span">${totalFinal}</span>
          </div>
          <InputLoginRegister
            className="input-enter"
            type="button"
            value="Confirmar Orden"
            icon={<ArrowRightOutlined />}
          />
        </div>
      </>
      )}
    </>
  );
}
