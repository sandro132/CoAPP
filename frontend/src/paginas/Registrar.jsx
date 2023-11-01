import { useState } from 'react'
import { Link } from "react-router-dom";
import Alerta from '../componentes/Alerta';
import Drop from '../componentes/Drop';



const Registrar = () => {
  const [tipoUsuario, setTipoUsuario] = useState("")
  const [nombre, setNombre] = useState('')
  const [numeroIdentidad, setNumeroIdentidad] = useState("")
  const [celular, setCelular] = useState("")
  
  const [ correo, setCorreo ] = useState('')
  const [ contraseña, setContraseña ] = useState('')
  const [ repetirpassword, setRepetirPassword ] = useState('')
  const [ alerta, setAlerta ] = useState({})
  
  const handleSubmit = e => {
    e.preventDefault();

    if([nombre, correo, contraseña, repetirpassword].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }

    if(contraseña != repetirpassword ) {
      setAlerta({
        msg: 'Las contraseñas no son iguales',
        error: true
      })
      return
    }

    if(contraseña.length < 6 ) {
      setAlerta({
        msg: 'La contraseña es muy corta, minimo 6 carateres',
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
            placeholder="Nombre Completo"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="numeroIdentidad"
          >
            Numero de identidad
          </label>
          <input
            id="numeroIdentidad"
            type="text"
            placeholder="numeroIdentidad"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={numeroIdentidad}
            onChange={(e) => setNumeroIdentidad(e.target.value)}
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
            htmlFor="correo"
          >
            Correo
          </label>
          <input
            id="correo"
            type="correo"
            placeholder="Email de Registro "
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="contraseña"
          >
            Contraseña
          </label>
          <span className="icon-eye"></span>
          <input
            id="contraseña"
            type="contraseña"
            placeholder="Password de Registro "
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
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