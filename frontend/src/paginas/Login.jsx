import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const { setAuth } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    try {
      const { data } = await clienteAxios.post("/usuarios/login", {
        email,
        password,
      });
      setAlerta({});
      localStorage.setItem("token", data.token);
      setAuth(data);
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };
  const { msg } = alerta;

  return (
    <div className="mx-8 max-w-lg">
      <div>
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
        <div>
          <h1 className="text-color:#393939  font-black text-4xl flex ">
            ¡Bienvenido de nuevo!
          </h1>
        </div>

        {msg && <Alerta alerta={alerta} />}

        <form
          className="my-10 bg-white shadow rounder-lg p-10 "
          onSubmit={handleSubmit}
        >
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

          <nav>
            {" "}
            <Link
              className="block text-left my-3 text-slate-500 uppercase text-sm "
              to="/olvide-password"
            >
              Olvide Mi Contraseña{" "}
            </Link>
          </nav>

          <input
            type="submit"
            value="Iniciar Sesión"
            className="bg-orange-400 mb-2 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-500 transition-colors"
          />
        </form>

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

export default Login;
