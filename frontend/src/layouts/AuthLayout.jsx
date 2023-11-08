import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
      <>
            <main className="container mx-auto md:flex  ">
                
                    <Outlet />
                
           </main>
      </>
    );
}

export default AuthLayout