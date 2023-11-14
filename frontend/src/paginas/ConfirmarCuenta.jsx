// Import necessary React hooks and components from libraries.
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";

// Define the ConfirmAccount component.
const ConfirmarCuenta = () => {
  // Define states to manage the alert and account confirmation status.
  const [alerta, setAlerta] = useState({});
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);

  // Get parameters from the URL using the React Router useParams hook.
  const params = useParams();
  const { id } = params;

  // Use the useEffect hook to perform actions after the component mounts.
  useEffect(() => {
    // Define an asynchronous function to confirm the account.
    const confirmarCuenta = async () => {
      try {
        // Build the URL for account confirmation.
        const url = `/usuarios/confirmar/${id}`;
        // Make a request to the server using axios (axiosClient).
        const { data } = await clienteAxios(url);

        // Update the alert state with a success message.
        setAlerta({
          msg: data.msg,
          error: false,
        });
        // Mark the account as confirmed.
        setCuentaConfirmada(true);
      } catch (error) {
        // If there's an error, update the alert state with an error message.
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };

    // Call the account confirmation function.
    confirmarCuenta();
  }, []); // The second argument ([]) indicates that this effect runs only once, equivalent to componentDidMount.

  // Destructure the message from the alert.
  const { msg } = alerta;

  // Render the component.
  return (
    <>
      {/* Structure of the account confirmation form */}
      <div className="loginBox">
        <div className="loginForm">
          <div>
            {/* Application logo */}
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
          {/* Form title */}
          <h1 className="text-color:#393939 font-black text-4xl flex ">
            Confirma tu Cuenta
          </h1>

          {/* Container to display the alert and link to login */}
          <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white ">
            {msg && <Alerta alerta={alerta} />}

            {/* Display the login link if the account is confirmed */}
            {cuentaConfirmada && (
              <Link
                className="block text-center my-5 text-slate-500 uppercase text-sm"
                to="/"
              >
                <span className="text-sky-900">Inicia Sesión</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmarCuenta;
