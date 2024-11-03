"use client"
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { DialogMui } from './DialogMui';
import { useFetchData } from '@/app/hooks/useFetchData';
import { TextField } from '@mui/material';
import { useDataGrid } from '@/app/context/datagrid';
import { useSelectorGrid } from '@/app/hooks/useSelectorGrid';
import { columnsWithDelete } from '@/app/utils/columnsWithDelete';
import { InputCategory } from '../textfield/InputCategory';
import FormDialog from './ModalForm';
import { useRowsActions } from '@/app/context/datagrid';
import { useEffect, useState } from 'react';


export default function ColumnSelectorGrid({columns}) {
  //const[rowsTotal, setRowsTotal] = useState(rows)
  const { rows, endpoint } = useDataGrid();
  const {openEdit,  handleEditClose, handleEditClick, selectedRow, handleInputChange} = useSelectorGrid()
  const { handleCreate, handleEdit, handleRows} = useRowsActions() 

  const handleEditMui = (event) =>{
    event.preventDefault()
    handleEdit(selectedRow)
    handleEditClose()
  }
  
  
  useEffect(()=>{
    const fetchData = async () => {
      try {
        await handleRows(); // Espera a que se complete handleRows
      } catch (error) {
        console.error("Error al obtener filas:", error); // Manejo de errores
      }
    };
    fetchData()
  }, [endpoint])



  // Añade la columna de "Eliminar" a las columnas recibidas
  
  return (
        <div style={{ height: 800, width: '100%', padding: '1rem' }}>
          <FormDialog title={"Categoria"}>
            <InputCategory></InputCategory>
          </FormDialog>
        <DataGrid
            editMode="row"
            rows={rows}
            columns={columnsWithDelete(columns, handleEditClick)}
            slots={{
              toolbar: GridToolbar,
            }}
            style={{ padding: '1rem' }}
            pageSize={8}
            disableSelectionOnClick
        />

        {openEdit && (
            <DialogMui text={"Editar"} handleClose={handleEditClose} submit={ handleEditMui} 
                open={openEdit} title={"Editar"}>
              <InputCategory selectedRow={selectedRow} handleInputChange={handleInputChange}></InputCategory>
          </DialogMui>
            
          )}
        </div>
  );
}
