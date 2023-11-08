import { Chart } from "react-google-charts";
export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
];
export const data2 = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
 
];
export const options = {
  title: "My Daily Activities",
};

export const options2 = {
  title: "My Daily Activities",
};

const charts = () => {
    return (
      <>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />

        <Chart
          chartType="PieChart"
          data={data2}
          options={options2}
          width={"100%"}
          height={"400px"}
        />
      </>
    );
};
export default charts;
