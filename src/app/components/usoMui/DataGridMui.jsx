"use client"
import { IconButton } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { Delete } from '@mui/icons-material';
import { DialogMui } from './DialogMui';
import { Edit } from '@mui/icons-material';
import { TextField } from '@mui/material';
import { useDataGrid } from '@/app/context/datagrid';
import { AddCircle } from '@mui/icons-material';
import { ENDPOINT_CATEGORY } from '@/app/utils/const';


export default function ColumnSelectorGrid({columns}) {
  //const[rowsTotal, setRowsTotal] = useState(rows)
  const { rows, handleCreate, handleEdit, handleDelete, handleRestore, fetchData } = useDataGrid();
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() =>{
    fetchData(ENDPOINT_CATEGORY)
  },[])

  const handleEditClick = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  /*
  const handleDeleteClick = (id) => {
    //setRowsTotal(rowsTotal.filter((row) => row.id !== id));
    setRowsTotal(rowsTotal.map(row => 
      row.id === id ? { ...row, status: false } : row
  ));
  };

  const handleRestoreClick = (id) => {
    //setRowsTotal(rowsTotal.filter((row) => row.id !== id));
    setRowsTotal(rowsTotal.map(row => 
      row.id === id ? { ...row, status: true} : row
  ));
  };

  const handleEditClick = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };


  const handleSave = () => {
    setRows(rows.map((row) => (row.id === selectedRow.id ? selectedRow : row)));
    handleClose();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedRow((prev) => ({ ...prev, [name]: value }));
  };*/

  // Añade la columna de "Eliminar" a las columnas recibidas
  const columnsWithDelete = [
    ...columns,
    {
      field: 'actions',
      headerName: 'Acciones',
      renderCell: (params) => (
        <>
            <IconButton onClick={() => handleEditClick(params.row)}>
                <Edit />
            </IconButton>
            {params.row.visible ? (
              <IconButton onClick={() => handleDelete(params.id)}>
                <Delete />
              </IconButton> // Ícono de activo
            ) : (
              <IconButton onClick={() => handleRestore(params.id)}>
                <AddCircle />
              </IconButton>  // Ícono de desactivado
            )}
            
        </>
      ),
      width: 150,
    },
  ];
  return (
        <div style={{ height: 800, width: '100%', padding: '1rem' }}>
        <DataGrid
            editMode="row"
            rows={rows}
            columns={columnsWithDelete}
            slots={{
              toolbar: GridToolbar,
            }}
            style={{ padding: '1rem' }}
            pageSize={8}
            disableSelectionOnClick
        />

        {open && (
            <DialogMui text={"Editar"} handleClose={handleClose} submit={handleCreate} open={open} title={"Editar"}>
              <TextField
                label="Nombre"
                name="name"
                value={selectedRow.name}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Descripción"
                name="description"
                value={selectedRow.status}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
          </DialogMui>
            
          )}
        </div>
  );
}
