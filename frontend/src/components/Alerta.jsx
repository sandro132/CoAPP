const Alerta = ({alerta}) => {
    return (
      <div
        className={`${
          alerta.error
            ? "from-orange-500 to-orange-500"
            : "from-sky-800 to-sky-800"
        }  bg-gradient-to-br text-center p-3  uppercase text-white font-bold text-sm my-10  mb-2 w-full py-3   rounded `}
      >
        {alerta.msg}
      </div>
    );
}

export default Alerta