import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Element", "Density", { role: "style" }],
  ["Junior", 8.94, "#d9d9d9"], // RGB value
  ["Semi Senior", 10.49, "color:#fb923c"], // English color name
  ["Senior", 19.3, "gold"],
];

export function ColumnP() {
  return (
    <>
      <div className="GrafiCosCirc">
        <div className="graphBox01">
          <Chart
            className="reactgooglegraph-01"
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={data}
          />
        </div>
      </div>
    </>
  );
}
