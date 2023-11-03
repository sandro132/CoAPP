import Dashboard from "../components/Dashboard";
import Navigation from "../components/Navigation";


const PaginaPrincipal = () => {
    return (
      <div className="flex min-h-screen">
            <Navigation />
            <Dashboard/>
            
    
      </div>
    );
}

export default PaginaPrincipal