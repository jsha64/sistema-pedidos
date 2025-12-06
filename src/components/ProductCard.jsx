export const ProductCard = ({ name, price, /*image*/ description, onAdd,
  pedidoConfirmacion }) => {
  
  return (
    <div className="product-card">
      {/* <img src={image} alt={name} className="product-image" /> */}

      <h3>{name}</h3>

      <p>{description}</p>

      <strong>${price}</strong>

      <button className="btn-agregar" onClick={() => {
          onAdd();             // Agrega al carrito
          pedidoConfirmacion(); // Muestra modal
        }}>
        Agregar al pedido
      </button>
    </div>
  );
}