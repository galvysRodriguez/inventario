import { Box } from "@mui/material";

export function DynamicBackground({ children}) {
    return (
      <Box
        sx={{
          backgroundColor: 'var (--card-background)',  // Cambia el color de fondo
          display: 'flex',
          width: '12rem', 
        }}
      >
        {children}
      </Box>
    );
  }