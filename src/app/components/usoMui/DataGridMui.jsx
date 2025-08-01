"use client"
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { DialogMui } from './DialogMui';
import { useFetchData } from '@/app/hooks/useFetchData';
import { TextField } from '@mui/material';
import { useDataGrid } from '@/app/context/datagrid';
import { useSelectorGrid } from '@/app/hooks/useSelectorGrid';
import { columnsWithDelete, columnsDelete } from '@/app/utils/columnsWithDelete';
import { InputCategory } from '../textfield/InputCategory';
import FormDialog from './ModalForm';
import { useRowsActions } from '@/app/context/datagrid';
import { useEffect, useState } from 'react';
import { Form } from './Form';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { SkeletonDatagrid } from './SkeletonDatagrid';

export default function ColumnSelectorGrid({columns, textfield, options, title, optionProduct}) {
  //const[rowsTotal, setRowsTotal] = useState(rows)
  const { rows, endpoint } = useDataGrid();
  const [loading, setLoading] = useState(true)
  const {openEdit,  openCreate, handleEditClose, handleEditClick, 
    selectedRow,  handleCreateClose, handleCreateClick} = useSelectorGrid()
  const { handleCreate, handleEdit, handleRows, handleClearRows} = useRowsActions() 
  console.log(optionProduct, "producto")
  
  useEffect(()=>{
    handleClearRows()

      const fetchData = async () => {
        try {
          await handleRows(); // Espera a que se complete handleRows
        } catch (error) {
          console.error("Error al obtener filas:", error); // Manejo de errores
        }
        finally{
          setLoading(false);
        }
      };

      const timeoutId = setTimeout(fetchData, 200); 

      return () => clearTimeout(timeoutId);
  
  }, [endpoint])



  // Añade la columna de "Eliminar" a las columnas recibidas
  
  return (
        <>
          {loading ? <SkeletonDatagrid></SkeletonDatagrid> : (
            <div style={{ height: 800, width: '100%', padding: '1rem', display: 'flex', flexDirection:'column', gap:'1rem' }}>
            <Button variant="outlined" onClick={handleCreateClick}  startIcon={<Add/>} style={{maxWidth:200, margin:'auto', width:'80vw'}}>
              Crear
            </Button>
            <Form fields={textfield} options={options} title={title} onSubmit={handleCreate}
              open={openCreate} onClose={handleCreateClose}>

            </Form>
          <DataGrid
              editMode="row"
              rows={rows}
              columns={optionProduct ? columnsDelete(columns) : columnsWithDelete(columns, handleEditClick)}
              slots={{
                toolbar: GridToolbar,
              }}
              style={{ padding: '1rem'}}
              pageSize={8}
              disableSelectionOnClick
          />

          {openEdit && (
              <Form fields={textfield} options={options} optionProduct={optionProduct} title={title} onSubmit={handleEdit}
              open={openEdit} onClose={handleEditClose} initialData={selectedRow} >

            </Form>
            )}
          </div>
        )}
        </>
        
        
  );
}
