// Import necessary React components and libraries.
import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";

// Define the ForgotPassword component
const OlvidePassword = () => {
  // Define states for managing email input and alerts.
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState({});

  // Handle the form submission to initiate the password recovery process.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the email input.
    if (email === "" || email.length < 6) {
      setAlerta({
        msg: "El Email es obligatorio",
        error: true,
      });
      return;
    }

    try {
      // Make a request to the server to initiate the password recovery.
      const { data } = await clienteAxios.post(`/usuarios/olvide-password`, {
        email,
      });

      // Update the alert state with a success message.
      setAlerta({
        msg: data.msg,
        error: false,
      });
    } catch (error) {
      // Update the alert state with an error message if there's an issue.
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  // Destructure the message from the alert.
  const { msg } = alerta;

  // Render the ForgotPassword component.
  return (
    <>
      {/* Structure of the password recovery form */}
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
          {/* Title of the form */}
          <h1 className="text-color:#393939 font-black text-4xl flex ">
            Recupera tu Acceso
          </h1>

          {/* Display the alert if there's a message */}
          {msg && <Alerta alerta={alerta} />}

          {/* Password recovery form */}
          <form
            className="my-10 bg-white shadow rounder-lg p-10"
            onSubmit={handleSubmit}
          >
            {/* Email input field */}
            <div className="my-5">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="email"
              >
                Email
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

            {/* Submit button */}
            <input
              type="submit"
              value="Enviar Código"
              className="bg-orange-400 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-500 transition-colors"
            />
          </form>

          {/* Navigation link to login page */}
          <nav className="lg:flex lg:justify-between center">
            <Link
              className="block text-center my-5 text-slate-500 uppercase text-sm"
              to="/"
            >
              ¿Ya tienes una cuenta?{" "}
              <span className="text-sky-900">Inicia Sesión</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

// Export the ForgotPassword component.
export default OlvidePassword;
