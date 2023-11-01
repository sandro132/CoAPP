import { useState } from 'react'
import { Link } from "react-router-dom";
import Alerta from '../componentes/Alerta';
import Drop from '../componentes/Drop';



const Registrar = () => {
  const [nombre, setNombre] = useState('')
  const [numerodeidentidad, setNumeroDeIdentidad] = useState("")
  const [celular, setCelular] = useState("")
  const [ciudad, setCiudad] = useState("")
  
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ repetirpassword, setRepetirPassword ] = useState('')
  const [ alerta, setAlerta ] = useState({})
  
  const handleSubmit = e => {
    e.preventDefault();

    if([nombre, email, password, repetirpassword].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }

    if(password != repetirpassword ) {
      setAlerta({
        msg: 'Los password no son iguales',
        error: true
      })
      return
    }

    if(password.length < 6 ) {
      setAlerta({
        msg: 'Los password es muy corto, minimo 6 carateres',
        error: true
      })
      return
    }

    setAlerta({})

    //crear el usuario en la API

    console.log('creando')
  }

  const { msg } = alerta

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
        ¡Registrate aquí!
      </h1>

      {msg && <Alerta alerta={alerta} />}

      <form
        className="my-10 bg-white shadow rounder-lg p-10"
        onSubmit={handleSubmit}
      >
        <Drop />
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Introduce tu nombre"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="numerodeidentidad"
          >
            Numero de identidad
          </label>
          <input
            id="numerodeidentidad"
            type="text"
            placeholder="Numero de identidad"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={numerodeidentidad}
            onChange={(e) => setNumeroDeIdentidad(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="celular"
          >
            Celular
          </label>
          <input
            id="celular"
            type="text"
            placeholder="celular"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="ciudad"
          >
            Ciudad
          </label>
          <input
            id="ciudad"
            type="text"
            placeholder="Ciudad"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          />
        </div>

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
            placeholder="Email de Registro "
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <span className="icon-eye"></span>
          <input
            id="password"
            type="password"
            placeholder="Introduce tu contraseña "
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password2"
          >
            Repetir Password
          </label>
          <input
            id="password2"
            type="password"
            placeholder="Repetir tu Password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={repetirpassword}
            onChange={(e) => setRepetirPassword(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Crear Cuenta"
          className="bg-orange-400 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-600 transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between center">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >
          ¿Si Ya tienes una cuenta?{" "}
          <span className="text-sky-900">Inicia Sesión</span>
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
};

export default Registrar;