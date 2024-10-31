"use client"
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Add } from '@mui/icons-material';
import { DialogMui } from './DialogMui';
import { SecondaryButton } from '../SecondaryButton';

export default function FormDialog({title, children, action}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submit = (event) => {
    /*event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const email = formJson.email;
    console.log(email);
    handleClose();*/
    handleClose()
  }

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}  startIcon={<Add/>}>
        Crear {title}
      </Button>
      <DialogMui text={"Crear"} handleClose={handleClose} submit={submit} open={open} title={title}>
        {children}
      </DialogMui>
     
    </>
  );
}