import { useState, useEffect, createContext } from 'react'
import clienteAxios from '../config/clienteAxios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    
    const [auth, setAuth] = useState({})

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token")
            if (!token) {
                return
            }

            const config = {
                Headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }//TODO: Aca podria organizar el Auth de tipo de usuario
            }


            try {
                const { data } = await clienteAxios('/usuarios/perfil', config)
                
                setAuth(data)
                
            } catch (error) {
                console.log(error)

            }
        }
        autenticarUsuario
    }, [])

    return (
        <AuthContext.Provider
            value={{
                setAuth

            }}
        
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;