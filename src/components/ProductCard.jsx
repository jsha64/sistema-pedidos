export const ProductCard = ({ name, price, /*image*/ description }) => {
  return (
    <div className="product-card">
      {/* <img src={image} alt={name} className="product-image" /> */}

      <h3>{name}</h3>

      <p>{description}</p>

      <strong>${price}</strong>
    </div>
  );
}