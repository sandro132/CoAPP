import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
      <>
            <main className="container mx-auto mt-2 md:mt-20  md:flex justify-center ">
                <div >
                    <Outlet />
                </div>
           </main>
      </>
    );
}

export default AuthLayout