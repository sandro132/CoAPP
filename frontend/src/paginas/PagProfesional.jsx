import DashProfesional from "../components/DashProfesional";
import Navigation from "../components/Navigation";


const PagProfesional = () => {
  return (
    <div>
      <div className="grow flex flex-col md:flex-row lg:flex-row min-h-screen">
        <Navigation />
        <DashProfesional />
      </div>
    </div>
  )
}

export default PagProfesional