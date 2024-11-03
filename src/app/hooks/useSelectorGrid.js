import { useState} from "react";

export function useSelectorGrid(){
    const [openEdit, setOpenEdit] = useState(false);
    const[openCreate, setOpenCreate] = useState(false)
    const [selectedRow, setSelectedRow] = useState({});
  // Usa useCallback para memorizar las funciones y evitar que se creen nuevamente en cada render
  const handleEditClick = (row) => {
    setSelectedRow(row);
    setOpenEdit(true);
    console.log(openEdit)
  }

  const handleEditClose = () =>{
    setOpenEdit(false);
    setSelectedRow(null);
  };

  const handleCreateClick = () => {
    setOpenCreate(true);
  }

  const handleCreateClose = () =>{
    setOpenCreate(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedRow((prev) => ({ ...prev, [name]: value }));
  }

  return {
    openEdit,
    openCreate,
    selectedRow,
    handleCreateClick,
    handleEditClick,
    handleEditClose,
    handleCreateClose,
    handleInputChange,
  };

}