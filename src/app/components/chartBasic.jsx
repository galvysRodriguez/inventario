"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { demoTheme } from "./usoMui/Theme";
import styles from './style.module.css';
import { API_URL } from "../../../config";

// Import ReactApexChart dinámicamente con SSR deshabilitado
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartApex = () => {
  // Datos de ventas por categoría
  const [chartOptions, setChartOptions] = useState({ options: {}, series: [] });

  useEffect(() => {
    // Simulando una llamada a una API que devuelve las ventas por categoría
    const seriesData = async () => {
      const result = await fetch(`${API_URL}/statistics/sale`);
      const res = await result.json();
      
      // Comprobamos si la respuesta es exitosa
      if (res.success) {
        // Actualizamos el estado con los datos de ventas por categoría
        console.log(res.data);
        setChartOptions({
          series: [{
            data: res.data.map(item => item.ventas), // Usamos las ventas extraídas de ventasPorCategoria
          }],
          options: {
            chart: {
              type: 'bar', // Tipo de gráfico
              height: 350, // Altura del gráfico
            },
            plotOptions: {
              bar: {
                borderRadius: 4, // Borde redondeado
                borderRadiusApplication: 'end', // Aplicar borde redondeado solo al final
                horizontal: true, // Hacer el gráfico de barras horizontal
              }
            },
            dataLabels: {
              enabled: false, // Deshabilitar etiquetas de datos
            },
            xaxis: {
              categories: res.data.map(item => item.categoria), // Las categorías serán las obtenidas de ventasPorCategoria
            },
            yaxis: {
              title: {
                text: 'Ventas Totales ($)', // Título del eje Y
              }
            },
            tooltip: {
              y: {
                formatter: function(val) {
                  return `$${val}`; // Mostrar el valor con el símbolo $
                },
              },
            },
          },
        });
      } else {
        console.error("Error en la respuesta de la API");
      }
    };

    seriesData();
    
  }, []);

  // Verifica si los datos y opciones están disponibles antes de renderizar
  if (!chartOptions.options || !chartOptions.series.length) {
    return <div>...</div>; // Puedes mostrar un mensaje o spinner mientras los datos se cargan
  }

  return (
    <ThemeProvider theme={demoTheme}> {/* Aplicar el tema a toda la aplicación */}
      <div>
        <div id="chart">
          {/* Renderiza el gráfico con las opciones y datos */}
          <ReactApexChart
            options={chartOptions.options}
            series={chartOptions.series}
            type="bar"
            className={styles.chart}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ChartApex;
