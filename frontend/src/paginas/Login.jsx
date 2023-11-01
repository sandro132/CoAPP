import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
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
        <h1 className="text-color:#393939 font-black text-4xl flex ">
          ¡Bienvenido de nuevo!
        </h1>
      </div>

      <form className="my-10 bg-white shadow rounder-lg p-10">
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="email"
          >
            Correo
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro "
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de Registro "
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            
            
          />
        </div>

        <input
          type="submit"
          value="Iniciar Sesión"
          className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between center">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="registrar"
        >
          ¿No tienes una cuenta?{" "}
          <span className="text-sky-900">Registrate aquí</span>
        </Link>
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/olvide-password"
        >
          Olvide Mi Contraseña{" "}
        </Link>
      </nav>
    </>
  );
}

export default Login