import Navbar from "./Navbar";
// import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export default function Nav({ carrito }) {
  
  return (
    <>
      <Navbar carrito={carrito}>
        Logo
        <div className="menu-hamburguesa">
          <MenuOutlined />
        </div>
        {carrito > 0 && <span>{carrito}</span>}
      </Navbar>
    </>
  );
}
