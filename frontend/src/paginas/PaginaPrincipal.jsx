import Dashboard from "../components/Dashboard";
import Navigation from "../components/Navigation";


const PaginaPrincipal = () => {
    return (
      <div className="grow flex flex-col md:flex-row lg:flex-row min-h-screen ">
        <Navigation />
        <Dashboard />
      </div>
    );
}

export default PaginaPrincipal