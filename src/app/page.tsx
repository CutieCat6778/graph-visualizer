"use client";

import LineChart from "@/components/linechart";
import { GenerateTableFunction } from "@/library/gen";
import { quadrants } from "@/library/plugins";
import { ChartValue } from "@/types";
import { registerables, Chart } from "chart.js";
import { useState } from "react";

Chart.register(...registerables);
Chart.registry.addPlugins(quadrants);

export default function Home() {
  const [chartValues, setChartValues] = useState<ChartValue[]>(GenerateTableFunction(-6, 2, 1, 4, 4));

  const [chartData, setChartData] = useState({
    labels: chartValues.map((data) => data.id),
    datasets: [
      {
        label: "My Graph",
        data: chartValues.map((data) => {
          return { x: data.x, y: data.y };
        }),
      },
    ],
  });

  return (
    <main className="flex justify-center align-center">
      {/* Setting panel */}
      <div></div>
      {/* Display Panel */}
      <div>
        <LineChart chartData={chartData}/>
      </div>
    </main>
  );
}
