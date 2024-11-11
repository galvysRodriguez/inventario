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
    { field: 'titulo', headerName: 'Producto', width: 150,  resizable: false  },
    { field: 'categoria', headerName: 'Categoria', width: 120,  resizable: false  },
    { field: 'precio', headerName: 'Precio', width: 100,  resizable: false },
    { field: 'costo', headerName: 'Costo', width: 100,  resizable: false  },
    { field: 'minimo', headerName: 'minimo', width: 80,  resizable: false  },
    { field: 'maximo', headerName: 'maximo', width: 80,  resizable: false  },
    visible
]

export const COLUMN_LOCATION =  [
    { field: 'sede', headerName: 'Sede', width: 180,  resizable: false  },
    visible
]

export const COLUMN_WAREHOUSE =  [
    { field: 'deposito', headerName: 'Depósito', width: 180,  resizable: false  },
    { field: 'sede', headerName: 'Sede', width: 180,  resizable: false  },
    visible
]

export const COLUMN_INPUT =  [
    { field: 'id', headerName: 'id', width: 80,  resizable: false  },
    { field: 'deposito', headerName: 'Deposito', width: 180,  resizable: false  },
    { field: 'cantidad', headerName: 'Cantidad', width: 80,  resizable: false  },
    { field: 'costo', headerName: 'Valor', width: 120,  resizable: false  },
    visible
]

export const COLUMN_OUTPUT =  [
    { field: 'id', headerName: 'id', width: 80,  resizable: false  },
    { field: 'deposito', headerName: 'Deposito', width: 180,  resizable: false  },
    { field: 'cantidad', headerName: 'Cantidad', width: 80,  resizable: false  },
    { field: 'costo', headerName: 'Valor', width: 120,  resizable: false  },
    visible
]

export const COLUMN_SALE =  [
    { field: 'id', headerName: 'id', width: 80,  resizable: false  },
    { field: 'deposito', headerName: 'Deposito', width: 180,  resizable: false  },
    { field: 'cantidad', headerName: 'Cantidad', width: 80,  resizable: false  },
    { field: 'costo', headerName: 'Valor', width: 120,  resizable: false  },
    visible
]

export const COLUMN_LOSS =  [
    { field: 'id', headerName: 'id', width: 80,  resizable: false  },
    { field: 'deposito', headerName: 'Deposito', width: 180,  resizable: false  },
    { field: 'cantidad', headerName: 'Cantidad', width: 80,  resizable: false  },
    { field: 'costo', headerName: 'Valor', width: 120,  resizable: false  },
    visible
]

export const COLUMN_CONTROL =  [
    { field: 'titulo', headerName: 'Producto', width: 180,  resizable: false  },
    {  field: 'stock', headerName: 'Stock', width: 140,  resizable: false  },
    {  field: 'minimo', headerName: 'Stock Minimo', width: 140,  resizable: false  },
    {  field: 'maximo', headerName: 'Stock Maximo', width: 140,  resizable: false  },
]

export const COLUMN_MOVE =  [
    {  field: 'titulo', headerName: 'Producto', width: 180,  resizable: false  },
    { field: 'tipo', headerName: 'Tipo', width: 180,  resizable: false  },
    { field: 'deposito', headerName: 'Deposito', width: 180,  resizable: false  },
    { field: 'cantidad', headerName: 'Cantidad', width: 80,  resizable: false  },
]