// Import necessary React components and libraries.
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";

// Define the component for setting a new password, NuevoPassword.
const NuevoPassword = () => {
  // Define states for managing the password input, token validation, alerts, and password modification status.
  const [password, setPassword] = useState("");
  const [tokenValido, setTokenValido] = useState(false);
  const [alerta, setAlerta] = useState({});
  const [passwordModificado, setpasswordModificado] = useState(false);

  // Get the token from the URL parameters using the useParams hook.
  const params = useParams();
  const { token } = params;

  // Use the useEffect hook to check the validity of the token when the component mounts.
  useEffect(() => {
    const comprobarToken = async () => {
      try {
        // Make a request to the server to check the validity of the token.
        await clienteAxios(`/usuarios/olvide-password/${token}`);
        // Set the token as valid.
        setTokenValido(true);
      } catch (error) {
        // If there's an error, set the alert state with an error message.
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };
    // Call the function to check the token validity.
    comprobarToken();
  }, []);

  // Handle the form submission to set a new password.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the length of the new password.
    if (password.length < 6) {
      setAlerta({
        msg: "El Password debe ser minimo de 6 caracteres",
        error: true,
      });
      return;
    }

    try {
      // Build the URL for setting a new password with the token.
      const url = `/usuarios/olvide-password/${token}`;

      // Make a request to the server to set the new password.
      const { data } = await clienteAxios.post(url, { password });
      // Set the alert state with a success message.
      setAlerta({
        msg: data.msg,
        error: false,
      });
      // Set the password modification status as true.
      setpasswordModificado(true);
    } catch (error) {
      // If there's an error, set the alert state with an error message.
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };
  // Destructure the message from the alert
  const { msg } = alerta;

  // Render the NuevoPassword component.
  return (
    <>
      {/* Structure of the password reset form */}
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
            Restablece tu Password
          </h1>

          {/* Display the alert if there's a message */}
          {msg && <Alerta alerta={alerta} />}

          {/* Display the form if the token is valid */}
          {tokenValido && (
            <form
              className="my-10 bg-white shadow rounder-lg p-10"
              onSubmit={handleSubmit}
            >
              {/* Password input field */}
              <div className="my-5">
                <label
                  className="uppercase text-gray-600 block text-xl font-bold"
                  htmlFor="password"
                >
                  Nuevo Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Escribe tu Nuevo Password "
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* Submit button */}
              <input
                type="submit"
                value="Guardar Nuevo Password"
                className="bg-orange-400 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-500 transition-colors"
              />
            </form>
          )}

          {/* Display a link to log in if the password is successfully modified */}
          {passwordModificado && (
            <Link
              className="block text-center my-5 text-slate-500 uppercase text-sm"
              to="/"
            >
              ¿Ya tienes una cuenta?{" "}
              <span className="text-sky-900">Inicia Sesión</span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

// Export the NuevoPassword component.
export default NuevoPassword;
