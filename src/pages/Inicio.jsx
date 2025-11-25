import { Link } from "react-router-dom";
import Header from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { productos } from "../data/productos";
import "../styles/product-card.css";

export const Inicio = () => {
    return (
        <>
          <Header LinkComponent={Link} />
          <h2>Página de inicio</h2>

          <div className="product-list">
            {productos.map(p =>(
              <ProductCard
                key={p.id}
                name={p.name}
                description={p.description}
                price={p.price} 
              />
            ))}
          </div>
        </>
    )
};