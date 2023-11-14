const Alerta = ({alerta}) => {
    return (
      <div
        className={`${
          alerta.error
            ? "from-orange-400 to-orange-400"
            : "from-sky-700 to-sky-700"
        }  bg-gradient-to-r text-center p-3  uppercase text-white font-bold text-sm my-10  mb-2 w-full py-3   rounded `}
      >
        {alerta.msg}
      </div>
    );
}

export default Alerta