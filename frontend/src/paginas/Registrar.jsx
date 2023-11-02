import { useState } from 'react'
import { Link } from "react-router-dom";
import Alerta from '../components/Alerta';
import Drop from '../components/Drop';
import axios from 'axios';



const Registrar = () => {

  // const [tipoUsuario, setTipoUsuario] = useState("")
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [contraseña, setContraseña] = useState('')
  const [repetircontraseña, setRepetirContraseña] = useState('')
  const [alerta, setAlerta] = useState({})
  
  const handleSubmit = async e => {
    e.preventDefault();

    if([nombre, correo, contraseña, repetircontraseña].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }

    if(contraseña != repetircontraseña ) {
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
    try {
      const respuesta = await axios.post('http://localhost:4000/api/usuarios', { nombre, correo, contraseña })
      console.log(respuesta)
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      });
    }

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
            placeholder="Introduce tu nombre completo"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
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
            type="email"
            placeholder="nombre@correo.com"
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
            type="password"
            placeholder="Introduce tu contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
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
            id="contraseña2"
            type="password"
            placeholder="Repetir tu contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={repetircontraseña}
            onChange={(e) => setRepetirContraseña(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Crear Cuenta"
          className="bg-orange-400 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-500 transition-colors"
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