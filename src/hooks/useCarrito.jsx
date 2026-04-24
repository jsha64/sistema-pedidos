import { useState } from "react";

export default function useCarrito() {
  const [carrito, setCarrito] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [productoAgregado, setProductoAgregado] = useState(null);

  const handleAdd = (producto) => {
    setCarrito(prev => [...prev, producto]);
    setProductoAgregado(producto);
    
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      setProductoAgregado(null)
    }, 3000);
  };

  const aumentarCantidad = (id) => {
    setCarrito(prev => [...prev, prev.find(p => p.id === id)]);
  };

  const disminuirCantidad = (id) => {
    setCarrito(prev => {
      const index = prev.findIndex(p => p.id === id);

      if(index === -1) return prev;

      const nuevo = [...prev];
      nuevo.splice(index, 1)

      return nuevo;
    });
  };

  // AGRUPAR PRODUCTOS

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

  // CÁLCULOS
  
  const total = listaFinal.reduce((acc, item) => acc + item.subtotal, 0);

  const totalCantidad = listaFinal.reduce(
    (acc, item) => acc + item.cantidad,
    0
  );

  const tarifaEnvio = totalCantidad * 4000;

  const totalFinal = total + tarifaEnvio;

  return {
    carrito,
    handleAdd,
    disminuirCantidad,
    aumentarCantidad,
    modalVisible,
    productoAgregado,
    listaFinal,
    total,
    tarifaEnvio,
    totalFinal
  };
}
