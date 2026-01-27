import Navbar from "../components/Navbar";
import ButtonBack from "../components/ButtonBack";
import InputLoginRegister from "../components/InputLoginRegister";


export default function Login() {
  return (
    <div className="login-main">
    <Navbar>
        <div className="div-nav">
            <ButtonBack />
            <span className="spanl">Login</span>
        </div>
    </Navbar>
    <div className="login-content">
        <div></div>
        <div className="inputs-login">
            <h5>Correo electronico</h5>
            <InputLoginRegister
                className="input-correo"
                placeholder="e.e ejemplo@email.com"
            />
        </div>
        <div className="inputs-login">
            <div className="div-forget">
                <div className="pass">
                    <h5>Contrasena</h5>
                </div>
                <div className="forget">
                    <h6>Olvidaste Tu Contrasena?</h6>
                </div>
            </div>
            <InputLoginRegister
                className="input-password"
                type="password"
                placeholder="al menos 8 caracteres"
            />
        </div>
        <div className="inputs-button">
            <InputLoginRegister
                className="input-enter"
                type="button"
                value="Entrar"
            />
        </div>
        <div>
            <span></span>
        </div>
        <div className="div-button-google">
            <input className="button-google" type="button" value="Google" />
        </div>
    </div>
    </div>
  )
}
