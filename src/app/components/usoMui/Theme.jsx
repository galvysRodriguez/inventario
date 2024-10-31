import { createTheme } from '@mui/material/styles';
import { esES } from '@mui/material/locale';
import { esES as esESGrid } from '@mui/x-data-grid/locales';

export const demoTheme = createTheme({
    cssVariables: {
      colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes:  {light: {
      palette: {
        background: {
          default: '#F9F9FE',
          paper: '#EEEEF9',
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: '#1F252E',
          paper: '#434F60',
        },
      }},
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 600,
        lg: 1200,
        xl: 1536,
      },
    },
  }, 
  esES,
  esESGrid
);