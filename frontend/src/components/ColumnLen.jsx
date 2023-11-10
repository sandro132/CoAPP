import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Element", "Density", { role: "style" }],
  ["JS", 8.94, "#d9d9d9"], // RGB value
  ["C++", 10.49, "#fb923c"], // English color name
  ["C#", 19.3, "gold"],
  ["Python", 21.45, "color: #e5e4e2"], // CSS-style declaration
];

export function ColumnLen() {
  return (
    <>
      <div className="GrafiCosCirc">
        <div className="graphBox01">
          <Chart
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
