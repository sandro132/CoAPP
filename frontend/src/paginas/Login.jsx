// Import necessary React components and libraries.
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";
import useAuth from "../hooks/useAuth";


// Define the Login component.
const Login = () => {
  // Define states for managing email and password inputs, alerts, and authentication status.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const navigate = useNavigate()

  // Use the custom useAuth hook to access authentication-related functions.
  const { setAuth } = useAuth();

  // Handle the form submission to perform user login.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that both email and password are provided.
    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    try {
      // Make a request to the server to perform user login.
      const { data } = await clienteAxios.post("/usuarios/login", {
        email,
        password,
      });
      // Clear any existing alerts.
      setAlerta({});
      // Store the authentication token in the local storage.
      localStorage.setItem("token", data.token);
      // Set the authentication status using the useAuth hook.
      setAuth(data);
      navigate("/pagina-principal")
    } catch (error) {
      // If there's an error, set the alert state with an error message.
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }

  };

  // const [showPwd, setShowPwd] = useState(false);
  // Destructure the message from the alert.
  const { msg } = alerta;

  // Render the Login component.
  return (
    <div className="loginBox">
      <div className="loginForm">
        <div>
          {/* Logo of the application */}
          <img
            className="display:flex align-items:center justify-content:center"
            src="https://coally-images.s3.amazonaws.com/logo-coally-n.png"
            alt="Logo Coally"
            loading="lazy"
            width="250"
            height="115"
            decoding="async"
            data-nimg="1"
          />
        </div>
        <div>
          {/* Title of the form */}
          <h1 className="text-color:#393939  font-black text-4xl flex ">
            ¡Bienvenido de nuevo!
          </h1>
        </div>

        {/* Display the alert if there's a message */}
        {msg && <Alerta alerta={alerta} />}

        {/* Login form */}
        <form
          className="my-10 bg-white shadow rounder-lg p-10 "
          onSubmit={handleSubmit}
        >
          {/* Email input field */}
          <div className="my-2 ">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="email"
            >
              Correo
            </label>
            <input
              id="email"
              type="email"
              placeholder="nombre@correo.com"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password input field */}
          <div className="my-2">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="Introduce tu contraseña"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Link to reset password */}
          <nav>
            {" "}
            <Link
              className="block text-left my-3 text-slate-500 uppercase text-sm "
              to="/olvide-password"
              >
              Olvide Mi Contraseña{" "}
            </Link>
          </nav>

          {/* Submit button */}
          <input
            type="submit"
            value="Iniciar Sesión"
            className="bg-orange-400 mb-2 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-500 transition-colors"
            to={navigate}
          />
        </form>

        {/* Navigation link to registration page */}
        <nav className="lg:flex lg:justify-between center">
          <Link
            className="block text-center my-2 text-slate-500 uppercase text-sm"
            to="registrar"
            >
            ¿No tienes una cuenta?{" "}
            <span className="text-sky-900">Registrate aquí</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

// Export the Login component
export default Login;
