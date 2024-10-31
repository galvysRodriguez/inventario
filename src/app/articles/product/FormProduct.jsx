import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  

export function InputProduct(){
    return(
        <>
            <TextField
            id="outlined-textarea"
            label="Titulo"
            placeholder="Iphone 16 pro max"
            multiline
            />
            <TextField
            id="outlined-select-currency"
            select
            label="Categoria"
            defaultValue="EUR"
            helperText="Please select your currency"
            >
            {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
            <TextField
            id="outlined-textarea"
            label="Stock minimo"
            placeholder="2"
            multiline
            />
            <TextField
            id="outlined-textarea"
            label="Stock Maximo"
            placeholder="50"
            multiline
            />
            <TextField
            id="outlined-textarea"
            label="Precio"
            placeholder="20.00"
            multiline
            />
            <TextField
            id="outlined-textarea"
            label="Costo"
            placeholder="12.80"
            multiline
            />

        </>
    )
    
}