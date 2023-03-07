import React from "react";
import ChartBar from "./ChartBar";
import "../../css/Chart.css";
import "../../css/ChartBar.css";

const Charts = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  console.log(dataPointValues);

  const totalMaximum = Math.max(...dataPointValues);
  console.log(totalMaximum);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Charts;
