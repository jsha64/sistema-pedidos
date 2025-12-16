import { Link } from "react-router-dom";

export default function Button({ 
    titulo,
    onAdd = null,
    pedidoConfirmacion = null,
    to = null,        // Si tiene ruta → se convierte en <Link>
    className = "btn-agregar"
}) {
    if(to) {
        return(
            <Link to={to} className={className}>
                {titulo}
            </Link>
        )
    }

    const handleClick = () => {
        if(onAdd) onAdd();
        if (pedidoConfirmacion) pedidoConfirmacion();
    };

  return (
    <>
      <button className={className} onClick={handleClick}>
        {titulo}
      </button>
    </>
  )
}
