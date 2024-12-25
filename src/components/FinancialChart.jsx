"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const FinancialChart = () => {
  const options = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    title: {
      text: "Stock Price Movement",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  const series = [
    {
      data: [
        {
          x: new Date("2023-12-20").getTime(),
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
        {
          x: new Date("2023-12-21").getTime(),
          y: [6632.01, 6643.59, 6620, 6630.11],
        },
        {
          x: new Date("2023-12-22").getTime(),
          y: [6630.71, 6648.95, 6623.34, 6635.65],
        },
        {
          x: new Date("2023-12-23").getTime(),
          y: [6635.65, 6651, 6629.67, 6638.24],
        },
        {
          x: new Date("2023-12-24").getTime(),
          y: [6638.24, 6640, 6620, 6624.47],
        },
      ],
    },
  ];

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="candlestick"
        height={350}
      />
    </div>
  );
};

export default FinancialChart;
