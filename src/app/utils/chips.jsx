import { Chip } from "@mui/material"

export const visible = 
    {
        field: 'visible',
        headerName: 'Estado',
        width: 130,
        renderCell: (params) => (
          <Chip
            label={params.value ? 'Activo' : 'Eliminado'}
            color={params.value ? 'success' : 'default'}
            variant="outlined"
            style={{
              borderColor: params.value ? '#00796b' : '#c62828',
              color: params.value ? '#00796b' : '#c62828',
            }}
          />
        ),
        resizable: false,
      }