"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import styles from './style.module.css';
import { API_URL } from "../../../config";

// Import ReactApexChart dynamically with SSR disabled
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartApexB = () => {
  // Estado para manejar los datos dinámicos de ventas
  const [chartOptions, setChartOptions] = useState({
    series: [],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: '100%',
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      title: {
        text: 'Ventas Totales por Categoría',
      },
      xaxis: {
        categories: [], // Las categorías de tu gráfico, como "Electrónica", "Ropa", etc.
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "K"; // Mostrar el valor con la unidad "K"
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
      },
    },
  });

  // Simulamos una llamada a una API para obtener las ventas por categoría
  useEffect(() => {
    // Simulando una llamada a una API que devuelve las ventas por categoría
    const seriesData = async () =>{
        const result = await fetch(`${API_URL}/statistics/sale`)
        const res = await result.json()
        return res.data
    }

    // Actualizando las opciones del gráfico con los datos calculados
    setChartOptions(prevOptions => ({
      ...prevOptions,
      series: seriesData,
      options: {
        ...prevOptions.options,
        xaxis: {
          categories: categorias, // Las categorías estarán en el eje X
        },
      },
    }));
  }, []);

  return (
    <div>
      <div id="chart">
        {/* ReactApexChart renderiza el gráfico con datos dinámicos */}
        <ReactApexChart
          options={chartOptions.options}
          series={chartOptions.series}
          type="bar"
          className={styles.chart}
        />
      </div>
    </div>
  );
};

export default ChartApexB;
