import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";


const NuevoPassword = () => {

  const [password, setPassword] = useState('')
  const [tokenValido, setTokenValido] = useState(false)
  const [alerta, setAlerta] = useState({})
  const [passwordModificado, setpasswordModificado] = useState(false)

  const params = useParams()
  const { token } = params

 

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/usuarios/olvide-password/${token}`)
        setTokenValido(true)
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })

      }
    }
    comprobarToken()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault();

    if (password.length < 6) {
      setAlerta({
        msg: 'El Password debe ser minimo de 6 caracteres',
        error: true
      })
      return
    }
  

    try {
      const url = `/usuarios/olvide-password/${token}`

      const { data } = await clienteAxios.post(url, { password })
      setAlerta({
        msg: data.msg,
        error: false
      })
      setpasswordModificado(true)
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
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
        Reestablece tu password
      </h1>

      {msg && <Alerta alerta={alerta}/>}

      {tokenValido && (
        <form
          className="my-10 bg-white shadow rounder-lg p-10"
          onSubmit={handleSubmit}
        
        >
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
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Guardar Nuevo Password"
            className="bg-orange-400 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-500 transition-colors"
          />
        </form>
      )}

      {passwordModificado && (
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >
          ¿Ya tienes una cuenta?{" "}
          <span className="text-sky-900">Inicia Sesión</span>
        </Link>  
      )}
    </>
  );
};

export default NuevoPassword;
