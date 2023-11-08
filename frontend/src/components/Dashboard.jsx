import BotonActualizar from "../components/BotonActualizar";
import PieChart from "./PieChart";


const Dashboard = () => {
  return (
    <main className="border-4 border-blue-800 shadow-lg p-5  bg-white my-2 mx-3 rounded-3xl">
      <div className="flex items-center justify-between">
        <h1 className="text-color:#393939  font-black text-2xl flex p-4 ">
          Dashboard Holberton - Coally
        </h1>
        <BotonActualizar />
      </div>

      <div className="grow flex gap-3 max-w-4xl dataBoxesUp">
        <div className="bg-orange-400 text-white  p-3 grow flex items-center gap-1 flex-row rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
          <div>
            <h3>Ultima Actualización</h3>
            <h2 className="font-bold text-2xl leading-5">10/10/2023</h2>
          </div>
        </div>
        <div className="bg-orange-400 text-white p-3 grow flex items-center gap-2 flex-row rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <div>
            <h3>Registros Actuales</h3>
            <h2 className="font-bold text-2xl leading-5">1500</h2>
          </div>
        </div>
        <div className="bg-orange-400 text-white p-3 grow flex items-center gap-2 flex-row rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <div>
            <h3>Profesionales</h3>
            <h2 className="font-bold text-2xl leading-5">450</h2>
          </div>
        </div>
        <div className="bg-orange-400 text-white p-3 grow flex items-center gap-2 flex-row rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <div>
            <h3>Empresas</h3>
            <h2 className="font-bold text-2xl leading-5">93</h2>
          </div>
        </div>
      </div>
      <div>
      </div>
      <div>
        <PieChart/>
      </div>
    </main>
    
  );
}

export default Dashboard