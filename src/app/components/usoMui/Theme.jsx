import { createTheme } from '@mui/material/styles';
import { esES } from '@mui/material/locale';
import { esES as esESGrid } from '@mui/x-data-grid/locales';

export const demoTheme = createTheme(
  {
    cssVariables: {
      colorSchemeSelector: 'data-toolpad-color-scheme', // Selector de esquema de color
    },
    colorSchemes: {
      light: {
        palette: {
          mode: 'light', // Modo claro
          background: {
            default: '#F9F9FE', // Fondo principal claro
            paper: '#EEEEF9', // Fondo de papel claro
          },
          text: {
            primary: '#000000', // Color de texto primario en modo claro
            secondary: '#555555', // Color de texto secundario
          },
        },
      },
      dark: {
        palette: {
          mode: 'dark', // Modo oscuro
          background: {
            default: '#1F252E', // Fondo principal oscuro
            paper: '#434F60', // Fondo de papel oscuro
          },
          text: {
            primary: '#FFFFFF', // Color de texto primario en modo oscuro
            secondary: '#BBBBBB', // Color de texto secundario
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900, // Ajuste el valor de md para mejor control
        lg: 1200,
        xl: 1536,
      },
    },
  },
  esES, // Agregar soporte para español en Material UI
  esESGrid // Agregar soporte para español en MUI DataGrid
);

