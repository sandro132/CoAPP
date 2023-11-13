const Alerta = ({alerta}) => {
    return (
        <div className={`${alerta.error ? 'from-orange-400 to-orange-600' : 'from-sky-800 to-sky-900'}  text-center p-3 rounded-xl uppercase text-white font-bold text-sm my-10 `}>
            {alerta.msg}
        </div>
    )
}

export default Alerta