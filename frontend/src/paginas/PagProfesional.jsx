import DashProfesional from "../components/DashProfesional";
import Navigation from "../components/Navigation";


const PagProfesional = () => {
  return (
    <div>
      <div className="grow flex min-h-screen">
              <Navigation />
              <DashProfesional/>
      </div>
    </div>
  );
}

export default PagProfesional