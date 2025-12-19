import { useState } from "react";

export default function useCarrito(carrito, setCarrito) {
  const [modalVisible, setModalVisible] = useState(false);
  const [productoAgregado, setProductoAgregado] = useState(null);

  const pedidoConfirmacion = () => {
    setModalVisible(true);

    setTimeout(() => {
      setModalVisible(false);
      setProductoAgregado(null);
    }, 3000);
  };

  const handleAdd = (producto) => {
    setCarrito([...carrito, producto]);
    setProductoAgregado(producto);
    pedidoConfirmacion();
  };


  return {
    modalVisible,
    productoAgregado,
    handleAdd,
    pedidoConfirmacion
  };
}
