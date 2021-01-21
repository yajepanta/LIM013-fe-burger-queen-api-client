import React, { useState } from "react";
import "../Login/Login.css";
import logo from "../../assets/images/logo.svg";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";
import Cookies from "universal-cookie";
import authUser from "../../controller/authUser.js";

const Login = () => {
  const [email, setUser] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [emptyError, setEmptyError] = useState(false);
  const regEx = /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/;

  const handleChange = (name, value) => {
    switch (name) {
      case "email":
        if (!regEx.test(value)) {
          setEmptyError(false);
          setEmailError(true);
        } else {
          setEmptyError(false);
          setUser(value);
          setEmailError(false);
        }
        break;
      case "password":
        if (value.length < 6) {
          setEmptyError(false);
          setPasswordError(true);
        } else {
          setEmptyError(false);
          setPassword(value);
          setPasswordError(false);
        }
        break;
      default:
        console.log(name, value)
        break;
    }
  };
/* ya no mandamos el objeto, sino directamente los valores */
  const handleSubmit = () => {
    if (email && password) {
      setEmptyError(false);
      const cookies = new Cookies();
      authUser(email, password)
        .then((res) => {
          cookies.set("cookieSession", res.token, { path: "/" });
          cookies.set("cookieEmail", email, { path: "/" });
          console.log("cookieSession")
          window.location.href = "/home";
        })
        .catch((err) => console.log(err));
    } else {
      setEmptyError(true);
    }
  };

  return (
    <div className="login-view flex-center">
      <div className="login-container flex-center">
        <img src={logo} alt="Burguer Queen"></img>
        <div className="row-login">
          <Label text="Correo:" />
          <Input
            data-testid="input-handle"
            attribute={{
              id: "email",
              name: "email",
              type: "email",
              placeholder: "Ingrese el correo",
            }}
            handleChange={handleChange}
            param={emailError}
          />
        </div>

        {emailError && (
          <Label text="El correo ingresado no es válido." param={emailError} />
        )}
        
        <div className="row-login">
          <Label text="Contraseña:" />
          <Input
            attribute={{
              id: "password",
              name: "password",
              type: "password",
              placeholder: "Ingrese la contraseña",
            }}
            handleChange={handleChange}
            param={passwordError}
          />
        </div>

        {passwordError && (
          <Label
            text="La contraseña ingresada es inválida o muy corta."
            param={passwordError}
          />
        )}

        {emptyError && (
          <Label
            text="Necesita completar todos los campos"
            param={emptyError}
          />
        )}
        <button className="login-button" onClick={handleSubmit} type="submit">
          Ingresar
        </button>
      </div>
    </div>
  );
};

export default Login;
