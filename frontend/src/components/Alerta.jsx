const Alerta = ({alerta}) => {
    return (
      <div
        className={`${
          alerta.error
            ? "from-orange-400 to-orange-600"
            : "from-sky-800 to-sky-900"
        }  text-center p-3  uppercase text-white font-bold text-sm my-10  mb-2 w-full py-3   rounded `}
      >
        {alerta.msg}
      </div>
    );
}

export default Alerta