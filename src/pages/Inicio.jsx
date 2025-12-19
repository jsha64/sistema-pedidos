import Nav from "../components/Nav";
import { ProductCard } from "../components/ProductCard";
import { productos } from "../data/productos";
import "../styles/product-card.css";
import { ModalConfirmacion } from "../components/ModalConfirmacion"
import useCarrito from "../hooks/useCarrito";

export const Inicio = ({ carrito, setCarrito }) => {
  const {
    modalVisible,
    productoAgregado,
    handleAdd,
    pedidoConfirmacion
  } = useCarrito(carrito, setCarrito)

    return (
        <>
        <ModalConfirmacion
            visible={modalVisible}
            message="✔ Producto agregado al carrito"
            product={productoAgregado}
        />
          <Nav carrito={carrito.length} />
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