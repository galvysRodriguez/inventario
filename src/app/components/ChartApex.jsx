"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import styles from './style.module.css';

// Import ReactApexChart dynamically with SSR disabled
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartApex = () => {
  const [chartOptions] = useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        {/* Now ReactApexChart is safely rendered on the client */}
        <ReactApexChart
          options={chartOptions.options}
          series={chartOptions.series}
          type="area"
          className={styles.chart}
        />
      </div>
    </div>
  );
};

export default ChartApex;
