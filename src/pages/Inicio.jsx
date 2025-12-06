import Header from "../components/Header";
import { useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { productos } from "../data/productos";
import "../styles/product-card.css";
import { ModalConfirmacion } from "../components/ModalConfirmacion"

export const Inicio = ({ carrito, setCarrito }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [productoAgregado, setProductoAgregado] = useState(null);

  const pedidoConfirmacion = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false)
      setProductoAgregado(null);
    }, 1000);
  };

  const handleAdd = (producto) => {
    setCarrito([...carrito,  producto]);
    setProductoAgregado(producto);
    pedidoConfirmacion();
  }

    return (
        <>
        <ModalConfirmacion
            visible={modalVisible}
            message="✔ Producto agregado al carrito"
            product={productoAgregado}
        />
          <Header carrito={carrito.length} />
          <h2>Página de inicio</h2>
          <div className="product-list">
            {productos.map((p) =>(
              <ProductCard
                key={p.id}
                {...p}
                onAdd={() => handleAdd(p)}
                pedidoConfirmacion={pedidoConfirmacion}
              />
            ))}
          </div> 
        </>
    )
};