import { Chart } from "react-google-charts";
export const data = [
  ["Task", "Hours per Day"],
  ["Vacantes", 11],
  ["Perfiles Profesionales", 2],
];
export const data2 = [
  ["Task", "Hours per Day"],
  ["Profesionales", 11],
  ["Empresas", 2],
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
