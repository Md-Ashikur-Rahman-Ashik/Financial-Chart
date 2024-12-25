"use client";

import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const LightChart = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.offsetWidth,
      height: 400,
      layout: {
        backgroundColor: "#ffffff",
        textColor: "#000",
      },
      grid: {
        vertLines: { color: "#e1e1e1" },
        horzLines: { color: "#e1e1e1" },
      },
      crosshair: {
        mode: 0, // Normal crosshair mode
      },
      rightPriceScale: {
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
      },
    });

    // Add candlestick series
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    // Example candlestick data
    candlestickSeries.setData([
      {
        time: "2023-12-20",
        open: 6629.81,
        high: 6650.5,
        low: 6623.04,
        close: 6633.33,
      },
      {
        time: "2023-12-21",
        open: 6632.01,
        high: 6643.59,
        low: 6620,
        close: 6630.11,
      },
      {
        time: "2023-12-22",
        open: 6630.71,
        high: 6648.95,
        low: 6623.34,
        close: 6635.65,
      },
      {
        time: "2023-12-23",
        open: 6635.65,
        high: 6651,
        low: 6629.67,
        close: 6638.24,
      },
      {
        time: "2023-12-24",
        open: 6638.24,
        high: 6640,
        low: 6620,
        close: 6624.47,
      },
    ]);

    // Clean up the chart when the component is unmounted
    return () => {
      chart.remove();
    };
  }, []);

  return (
    <div
      ref={chartContainerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
      }}
    ></div>
  );
};

export default LightChart;
