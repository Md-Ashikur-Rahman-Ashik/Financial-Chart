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

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    const data = [
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
    ];

    candlestickSeries.setData(data);

    chart.timeScale().fitContent();

    const toolTip = document.createElement("div");
    toolTip.style.position = "absolute";
    toolTip.style.background = "rgba(255, 255, 255, 0.9)";
    toolTip.style.border = "1px solid #ccc";
    toolTip.style.padding = "8px";
    toolTip.style.borderRadius = "4px";
    toolTip.style.fontSize = "12px";
    toolTip.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
    toolTip.style.pointerEvents = "none";
    toolTip.style.zIndex = "1000";
    toolTip.style.display = "none";
    chartContainerRef.current.appendChild(toolTip);

    chart.subscribeCrosshairMove((param) => {
      if (
        !param ||
        !param.seriesData ||
        !param.seriesData.get(candlestickSeries)
      ) {
        toolTip.style.display = "none";
        return;
      }

      const seriesData = param.seriesData.get(candlestickSeries);
      const { x, y } = param.point;

      const timeString = seriesData.time; // Original time as a string
      const formattedTime = new Date(timeString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      toolTip.innerHTML = `
        <strong>Time:</strong> ${formattedTime}<br/>
        <strong>Open:</strong> ${seriesData.open}<br/>
        <strong>High:</strong> ${seriesData.high}<br/>
        <strong>Low:</strong> ${seriesData.low}<br/>
        <strong>Close:</strong> ${seriesData.close}
      `;
      toolTip.style.display = "block";

      const containerRect = chartContainerRef.current.getBoundingClientRect();
      const tooltipWidth = toolTip.offsetWidth;
      const tooltipHeight = toolTip.offsetHeight;

      toolTip.style.left = `${Math.min(
        Math.max(x - tooltipWidth / 2, 0),
        containerRect.width - tooltipWidth
      )}px`;
      toolTip.style.top = `${Math.min(
        y - tooltipHeight - 10,
        containerRect.height - tooltipHeight
      )}px`;
    });

    return () => {
      chart.remove();
      toolTip.remove();
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
