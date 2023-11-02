import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";

const ConfirmarCuenta = () => {

  const [alerta, setAlerta] = useState({})
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)
 
  const params = useParams();
  const { id } = params

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/usuarios/confirmar/${id}`;
        const { data } = await clienteAxios(url);

        setAlerta({
          msg: data.msg,
          error: false,
        });
        setCuentaConfirmada(true);
      } catch (error) {

        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
     
      }

    }
    confirmarCuenta();
  }, [])

  const { msg } = alerta

  return (
    <>
      <h1 className="text-color:#393939 font-black text-4xl flex ">
        Confirma tu Cuenta
      </h1>

      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white ">
        {msg && <Alerta alerta={alerta} />}

        {cuentaConfirmada && (
          <Link
            className="block text-center my-5 text-slate-500 uppercase text-sm"
            to="/"
          >
            <span className="text-sky-900">Inicia Sesión</span>
          </Link>
        )}
      </div>
    </>
  );
}

export default ConfirmarCuenta