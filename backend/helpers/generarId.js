// 

const generarId = () => {
    // Id Numero random + fecha actual del perfil
    const random = Math.random().toString(32).substring(2);
    const fecha = Date.now().toString(32);
    return random + fecha
};

export default generarId;