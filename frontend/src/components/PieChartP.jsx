import { Chart } from "react-google-charts";
export const data = [
  ["Task", "Hours per Day"],
  ["Remoto", 50],
  ["Presencial", 20],
];

export const options = {
  title: "Grafico 1",
  legend: { position: "bottom", textStyle: { color: "black", fontSize: 12 } },
  slices: {
    0: { color: "#d9d9d9" },
    1: { color: "#fb923c" },
  },
}





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
      </div>
    </>
  );
};
export default charts;
