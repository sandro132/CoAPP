import { Link } from "react-router-dom";

const NuevoPassword = () => {
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
      <h1 className="text-color:#393939 font-black text-4xl flex ">
        Reestablece tu password
      </h1>

      <form className="my-10 bg-white shadow rounder-lg p-10">
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
          />
        </div>

        <input
          type="submit"
          value="Guardar Nuevo Password"
          className="bg-orange-400 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-500 transition-colors"
        />
      </form>
      <nav>
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >
          ¿Ya tienes una cuenta?{" "}
          <span className="text-sky-900">Inicia Sesión</span>
        </Link>
      </nav>
    </>
  );
};

export default NuevoPassword;
