"use client"
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Add } from '@mui/icons-material';
import { DialogMui } from './DialogMui';
import { SecondaryButton } from '../SecondaryButton';
import { useSelectorGrid } from '@/app/hooks/useSelectorGrid';
import { useRowsActions } from '@/app/context/datagrid';

export default function FormDialog({title, children}) {
  const {handleCreate} = useRowsActions()
  const {handleCreateClick, openCreate, handleCreateClose} = useSelectorGrid()

  const submit = (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())
    /*const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const email = formJson.email;
    console.log(email);
    handleClose();*/
    handleCreate(data)
    handleCreateClose()
  }

  return (
    <>
      <Button variant="outlined" onClick={handleCreateClick}  startIcon={<Add/>}>
        Crear
      </Button>
      <DialogMui text={"Crear"} handleClose={handleCreateClose} submit={submit} open={openCreate} title={title}>
        {children}
      </DialogMui>
     
    </>
  );
}