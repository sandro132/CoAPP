import { ColumnP } from "./ColumnP";
import PieChartP from "./PieChartP";
import { ColumnLen } from "./ColumnLen";

const DashProfesional = () => {
  return (
    <main className=" shadow-lg p-5 bg-white my-2 mx-3 rounded-3xl">
      <div className="flex items-center justify-between">
        <h1 className="text-color:#393939  font-black text-2xl flex p-4 ">
          Profesional Holberton - Coally
        </h1>
      </div>

      <div className="flex flex-row graficosBarrasProDash ">
        <div className="graficosBarras">
          <h2 className="text-color:#393939 font-black ">Salario/Role</h2>
          <ColumnP />
        </div>
        <div className="graficosBarras">
          <h2 className="text-color:#393939 font-black ">Habilidades</h2>
          <ColumnLen />
        </div>
        <div>
          <h2 className="text-color:#393939 font-black">Ubicación</h2>
          <PieChartP />
        </div>
      </div>
    </main>
  );
};

export default DashProfesional;
