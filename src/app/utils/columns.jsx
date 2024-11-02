import { Chip } from "@mui/material"

const visible = 
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

export const COLUMN_CATEGORY =  [
    { field: 'categoria', headerName: 'Categoria', width: 200,  resizable: false  },
    visible
]

export const COLUMN_PRODUCT =  [
    { field: 'name', headerName: 'Producto', width: 100,  resizable: false  },
    { field: 'cateogory', headerName: 'Categoria', width: 100,  resizable: false  },
    { field: 'price', headerName: 'Precio', width: 100,  resizable: false },
    { field: 'cost', headerName: 'Costo', width: 100,  resizable: false  },
    { field: 'min', headerName: 'Stock minimo', width: 100,  resizable: false  },
    { field: 'max', headerName: 'Stock maximo', width: 100,  resizable: false  },
    visible
]

export const COLUMN_LOCATION =  [
    { field: 'name', headerName: 'Sede', width: 100,  resizable: false  },
    visible
]

export const COLUMN_WAREHOUSE =  [
    { field: 'name', headerName: 'Depósito', width: 100,  resizable: false  },
    { field: 'location', headerName: 'Sede', width: 100,  resizable: false  },
    visible
]
