import Navbar from "./Navbar";

export const ModalConfirmacion = ({ visible, message, product }) => {
  if (!visible) return null;

  return (
    <div className="modal-confirmacion">
      <div className="modal-content">
        <p>
          {message}
        </p>
        {product && (
          <>
            <p>
              <strong>Producto:</strong> {product.name}
            </p>
            <p>{product.description}</p>
            <Navbar />
          </>
        )}
      </div>
    </div>
  )
}
