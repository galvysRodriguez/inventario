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
  const [chartOptions, setChartOptions] = useState({ options: {}, series: [] });

  // Definimos el tema para Apex
  const apexTheme = {
    mode: 'light',  // o 'dark' dependiendo de tu preferencia
    palette: 'palette1', // o la paleta que prefieras (palette1, palette2, etc.)
    monochrome: {
      enabled: false, // Establece si se quiere usar el tema monocromático
      color: '#255aee', // Color base si el tema monocromático está habilitado
      shadeTo: 'light', // Puede ser 'light' o 'dark'
      shadeIntensity: 0.65, // Intensidad de la sombra
    }
  };

  useEffect(() => {
    const seriesData = async () => {
      const result = await fetch(`${API_URL}/statistics/sale`);
      const res = await result.json();
      
      if (res.success) {
        setChartOptions({
          series: [{
            data: res.data.map(item => item.ventas), // Usamos las ventas extraídas de ventasPorCategoria
          }],
          options: {
            chart: {
              type: 'bar', // Tipo de gráfico
              height: 350, // Altura del gráfico
              background: apexTheme.mode === 'light' ? '#F9F9FE' : '#1F252E', // Cambiar color de fondo según el modo
            },
            plotOptions: {
              bar: {
                borderRadius: 4,
                borderRadiusApplication: 'end',
                horizontal: true, // Hacer el gráfico de barras horizontal
              }
            },
            dataLabels: {
              enabled: false, // Deshabilitar etiquetas de datos
            },
            xaxis: {
              categories: res.data.map(item => item.categoria),
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
            colors: apexTheme.palette === 'palette1' ? ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'] : [], // Cambiar los colores de las barras según la paleta
            theme: {
              mode: apexTheme.mode, // Modo de tema (light o dark)
              monochrome: apexTheme.monochrome.enabled ? {
                enabled: true,
                color: apexTheme.monochrome.color,
                shadeTo: apexTheme.monochrome.shadeTo,
                shadeIntensity: apexTheme.monochrome.shadeIntensity,
              } : false, // Usar tema monocromático si está habilitado
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
    return <div>Loading...</div>; // Puedes mostrar un mensaje o spinner mientras los datos se cargan
  }

  return (
    <ThemeProvider theme={demoTheme}> {/* Aplicar el tema de Material UI */}
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
