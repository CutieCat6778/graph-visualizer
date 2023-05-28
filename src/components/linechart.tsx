"use client";

import { quadrants } from "@/library/plugins";
import { ChartData} from "chart.js";
import { Scatter } from "react-chartjs-2";

export default function LineChart({
  chartData,
}: {
  chartData: ChartData<"scatter">;
}) {

  console.log(chartData.datasets)

  const options: any = {
    plugins: {
      quadrants: {
        topLeft: "#ffffff",
        topRight: "#ffffff",
        bottomRight: "#ffffff",
        bottomLeft: "#ffffff",
      }
    }
  }

  return (
    <div>
      <Scatter
        data={chartData}
        options={options}
        plugins={[quadrants]}
      />
    </div>
  );
}
