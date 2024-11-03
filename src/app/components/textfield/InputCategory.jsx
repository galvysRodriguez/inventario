import { TextField } from "@mui/material"
import { useSelectorGrid } from "@/app/hooks/useSelectorGrid"

export function InputCategory({selectedRow, handleInputChange}){
    return(
        <>
            <TextField
            label="Categoria"
            name="categoria"
            value={selectedRow ? selectedRow.categoria : selectedRow}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            />
        </>
    )
    
}