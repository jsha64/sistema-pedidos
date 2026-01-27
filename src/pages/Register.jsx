import InputLoginRegister from "../components/InputLoginRegister";
import Navbar from "../components/Navbar";
import ButtonBack from "../components/ButtonBack";

export default function Register() {
  return (
    <div className="register-main">
        <Navbar>
            <div className="div-nav">
                <ButtonBack />
                <span className="spanr">Register</span>
            </div>
        </Navbar>
        <div className="register-content">
            <div className="span-registro">
                <h1 className="h1-registro">Crear una nueva cuenta</h1>
                <span className="h1-registro">Únase a nosotros para comenzar a pedir deliciosas comidas de sus restaurantes locales favoritos</span>
            </div>
            <div className="inputs-login">
                <h5>Nombre</h5>
                <InputLoginRegister
                    className="input-correo"
                    placeholder="John Deth"
                />
            </div>
            <div className="inputs-login">
                <h5>Correo Electronico</h5>
                <InputLoginRegister
                    className="input-correo"
                    placeholder="ejemplo@email.com"
                />
            </div>
            <div className="inputs-login">
                <h5>Numero de telefono</h5>
                <InputLoginRegister
                    className="input-correo"
                    placeholder="+1(555)000-0000"
                />
            </div>
            <div className="inputs-login">
                <h5>Contrasena</h5>
                <InputLoginRegister
                    className="input-correo"
                    placeholder="e.e ejemplo@email.com"
                />
            </div>
            <div className="inputs-button">
                <InputLoginRegister
                    className="input-enter"
                    type="button"
                    value="Registrar"
                />
            </div>
            <div className="div-button-google">
                <input className="button-google" type="button" value="Google" />
            </div>
        </div>
    </div>
  )
}
