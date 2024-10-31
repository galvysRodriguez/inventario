"use client"
import { IconButton } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useState } from 'react';
import { Delete } from '@mui/icons-material';
import { DialogMui } from './DialogMui';
import { Edit } from '@mui/icons-material';
import { TextField } from '@mui/material';
import { PrimaryButton } from '../PrimaryButton';


export default function ColumnSelectorGrid({columns, rows}) {
  const[rowsTotal, setRowsTotal] = useState(rows)
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleDeleteClick = (id) => {
    setRowsTotal(rowsTotal.filter((row) => row.id !== id));
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
  };

  // Añade la columna de "Eliminar" a las columnas recibidas
  const columnsWithDelete = [
    ...columns,
    {
      field: 'actions',
      headerName: 'Acciones',
      renderCell: (params) => (
        <>
            <IconButton onClick={() => handleDeleteClick(params.id)}>
                <Delete />
            </IconButton>
            <IconButton onClick={() => handleEditClick(params.row)}>
                <Edit />
        </IconButton>
        </>
        
      ),
      width: 150,
    },
  ];
  return (
        <div style={{ height: 600, width: '100%' }}>
        <DataGrid
            editMode="row"
            rows={rowsTotal}
            columns={columnsWithDelete}
            slots={{
            toolbar: GridToolbar,
            }}
            
        />

        {open && (
            <DialogMui text={"Editar"} handleClose={handleClose} submit={handleSave} open={open} title={"Editar"}>
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
                value={selectedRow.age}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
          </DialogMui>
            
          )}
        </div>
  );
}
