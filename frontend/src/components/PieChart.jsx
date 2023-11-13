import { Chart } from "react-google-charts";
// import data from './pruebaChart.json'

// const data01 = [{data.datosGrafico1}]
// const data0x = [
//   {
//     _id: null,
//     counts: [
//       {
//         department: "Cleaning",
//         number: 1,
//       },
//       {
//         department: "Engineering",
//         number: 2,
//       },
//       {
//         department: "Transportation",
//         number: 1,
//       },
//     ],
//   },
// ];

// let data3 = [];
// data3.push(["Element", "Density", { role: "style" }]);
// data01[0].counts.forEach((item) =>
//   data3.push([item.department, item.number, ""])
// );
// console.log(data3);

export const data = [
  ["Task", "Hours per Day"],
  ["Vacantes", 50],
  ["Perfiles Profesionales", 5],
];
export const data2 = [
  ["Task", "Hours per Day"],
  ["Profesionales", 70],
  ["Empresas", 4],
];
export const options = {
  title: "Grafico 1",
  legend: { position: "bottom", textStyle: { color: "black", fontSize: 12 } },
  slices: {
    0: { color: "#d9d9d9" },
    1: { color: "#fb923c" },
  },
};

export const options2 = {
  title: "Grafico 2",
  legend: { position: "bottom", textStyle: { color: "black", fontSize: 12 } },
  slices: {
    0: { color: "#d9d9d9" },
    1: { color: "#fb923c" },
  },
};

const charts = () => {
  return (
    <>
      <div className="GrafiCosCirc">
        <div className="graphBox01">
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
          />
        </div>
        <div className="graphBox01">
          <Chart
            chartType="PieChart"
            data={data2}
            options={options2}
            width={"100%"}
            height={"400px"}
          />
        </div>
      </div>
    </>
  );
};
export default charts;
