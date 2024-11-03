import { useState, useCallback, createContext } from "react";

const SelectorGridContext = createContext();

export function SelectorGridProvider(){
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
  // Usa useCallback para memorizar las funciones y evitar que se creen nuevamente en cada render
  const handleEditClick = (row) => {
    setSelectedRow(row);
    setOpenEdit(true);
  }

  const handleEditClose = () =>{
    setOpenEdit(false);
    setSelectedRow(null);
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedRow((prev) => ({ ...prev, [name]: value }));
  }

  return {
    openEdit,
    selectedRow,
    handleEditClick,
    handleEditClose,
    handleInputChange,
  };

}