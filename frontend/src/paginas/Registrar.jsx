import { useState } from 'react'
import { Link } from "react-router-dom";
import Alerta from '../components/Alerta';
import Drop from '../components/Drop';
import clienteAxios from '../config/clienteAxios';
import {AiFillEye} from "react-icons/ai"
import {AiFillEyeInvisible} from "react-icons/ai"



const Registrar = () => {

  // const [tipoUsuario, setTipoUsuario] = useState("")
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repetirpassword, setRepetirPassword] = useState('')
  const [alerta, setAlerta] = useState({})
  
  const handleSubmit = async e => {
    e.preventDefault();

    if([name, email, password, repetirpassword].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }

    if(password != repetirpassword ) {
      setAlerta({
        msg: 'Las contraseñas no son iguales',
        error: true
      })
      return
    }

    if(password.length < 6 ) {
      setAlerta({
        msg: 'La contraseña es muy corta, minimo 6 carateres',
        error: true
      })
      return
    }

    setAlerta({})

    //crear el usuario en la API
    try { 
      const { data } = await clienteAxios.post(
        `/usuarios`,
        { name, email, password }
      );
      
      setAlerta({
        msg: data.msg,
        error: false
      })

      setName('')
      setEmail('')
      setPassword('')
      setRepetirPassword('')
      
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      });
    }

}
  const [showPwd, setShowPwd] = useState(false)
  const { msg } = alerta

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
                id="name"
                type="text"
                placeholder="Introduce tu nombre completo"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
              <span className="icon-eye"></span>
              <div className="flex flex-row items-center justify-center">
                <input
                  id="password"
                  type={showPwd ? "text" : "password"}
                  placeholder="Introduce tu contraseña"
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div onClick={() => setShowPwd(!showPwd)}>
                  {showPwd ? (
                    <AiFillEye className="text-2xl ml-2 text-gray-600" />
                  ) : (
                    <AiFillEyeInvisible className="debug text-2xl ml-2 text-gray-600" />
                  )}
                </div>
              </div>
            </div>

            <div className="my-5">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="contraseña2"
              >
                Repetir Contraseña
              </label>
              <div className="flex flex-row items-center justify-center">
                <input
                  id="password2"
                  type={showPwd ? "text" : "password"}
                  placeholder="Repetir tu contraseña"
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                  value={repetirpassword}
                  onChange={(e) => setRepetirPassword(e.target.value)}
                />
                <div onClick={() => setShowPwd(!showPwd)}>
                  {showPwd ? (
                    <AiFillEye className="text-2xl ml-2 text-gray-600" />
                  ) : (
                    <AiFillEyeInvisible className="debug text-2xl ml-2 text-gray-600" />
                  )}
                </div>
              </div>
            </div>

            <input
              type="submit"
              value="Crear Cuenta"
              className="bg-orange-400 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-500 transition-colors botonFormRegistro"
            />
          </form>

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

export default Registrar;