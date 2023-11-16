import { useState } from 'react'
import { Link } from "react-router-dom";
import Alerta from '../components/Alerta';
import Drop from '../components/Drop';
import clienteAxios from '../config/clienteAxios';
import Union from '../components/Union';

// Definition of the functional component Registrar
const Registrar = () => {
  // Definition of initial states using the useState hook
  const [typeUser, setTypeUser] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirpassword, setRepetirPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  // Function that handles the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(typeUser);
    console.log(repetirpassword);

    // Form validations
    if ([name, email, password, repetirpassword].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });

      return;
    }

    if (password != repetirpassword) {
      setAlerta({
        msg: "Las contraseñas no son iguales",
        error: true,
      });
      return;
    }

    if (password.length < 6) {
      setAlerta({
        msg: "La contraseña es muy corta, minimo 6 carateres",
        error: true,
      });
      return;
    }

    setAlerta({});

    // Create the user in the API
    try {
      const { data } = await clienteAxios.post(`/usuarios`, {
        name,
        email,
        password,
        typeUser,
      });

      setAlerta({
        msg: data.msg,
        error: false,
      });

      // Clear form fields after successful registration
      setName("");
      setEmail("");
      setPassword("");
      setRepetirPassword("");
      setTypeUser("");
    } catch (error) {
      setAlerta({
        // Handle API errors and display alert messages
        msg: error.response.data.msg,
        error: true,
      });
    }
  };
  // Additional state to handle password visibility
  const [showPwd, setShowPwd] = useState(false);
  const { msg } = alerta;

  // JSX structure of the component
  return (
    <>
      <div className="loginBox">
        <div className="loginForm loginRegistro">
          <div>
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
          <h1 className="text-color:#393939 font-black text-4xl flex ">
            ¡Registrate aquí!
          </h1>

          {/* Display alert message if it exists */}
          {msg && <Alerta alerta={alerta} />}

          {/* Registration form */}
          <form
            className="my-10 bg-white shadow rounder-lg p-10"
            onSubmit={handleSubmit}
          >
            {/* Drop component to select user type */}
            <Drop
              onTipoUsuarioSeleccionado={(tipoUsuario) =>
                setTypeUser(tipoUsuario)
              }
            />

            {/* Input fields for name, email, password, and repeat password */}
            <div className="my-5">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                id="name"
                type="text"
                placeholder="Introduce tu nombre completo"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* ... (similar fields for email, password, and repeat password) */}

            {/* Submit form button */}

            <div className="my-5">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="correo"
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

            <div className="my-5">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="contraseña"
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

            <div className="my-5">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="contraseña2"
              >
                Repetir Contraseña
              </label>
              <input
                id="password2"
                type="password"
                placeholder="Repite tu contraseña"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                value={repetirpassword}
                onChange={(e) => setRepetirPassword(e.target.value)}
              />
            </div>

            {/* ... (similar fields for email, password, and repeat password) */}

            {/* Submit form button */}

            <input
              type="submit"
              value="Crear Cuenta"
              className="bg-orange-400 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-500 transition-colors botonFormRegistro"
            />
          </form>

          {/* Link to redirect to the login page */}
          <nav className="lg:flex lg:justify-between center">
            <Link
              className="block text-center my-1 text-slate-500 uppercase text-sm"
              to="/"
            >
              ¿Si Ya tienes una cuenta?{" "}
              <span className="text-sky-900">Inicia Sesión</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};
// Export the component for use in other files
export default Registrar;