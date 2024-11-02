import { createContext, useContext, useState } from 'react';

// Crear el contexto
const DataGridContext = createContext();

const keyFirstId = (arr) => {
    arr.forEach((objeto) => {
      const claves = Object.keys(objeto); // Obtener las claves del objeto
      const primeraClave = claves[0]; // Obtener la primera clave
      objeto['id'] = objeto[primeraClave]; // Asignar el valor a 'id'
      delete objeto[primeraClave]; // Eliminar la primera clave original
    });

    return arr
  };

// Proveedor del contexto
export const DataGridProvider = ({ children }) => {
    const [rows, setRows] = useState([]);

    const fetchData = async (endpoint) => {
        try {
          const response = await fetch(endpoint);
          if (!response.ok) {
            throw new Error('Error al obtener los datos');
          }
          const data = await response.json();
          const result = keyFirstId(data.data)
          console.log(result)
          setRows(result); 
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      };

  // Crear nueva fila en el DataGrid y en la API
  const handleCreate = async (newRow, endpoint) => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRow),
      });
      const createdRow = await response.json();
      setRows((prev) => [...prev, createdRow]);
    } catch (error) {
      console.error('Error creating row:', error);
    }
  };

  // Editar fila en el DataGrid y en la API
  const handleEdit = async (updatedRow, endpoint) => {
    try {
      await fetch(`${endpoint}/${updatedRow.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedRow),
      });
      setRows((prev) => prev.map((row) => (row.id === updatedRow.id ? updatedRow : row)));
    } catch (error) {
      console.error('Error updating row:', error);
    }
  };

  // Eliminar fila del DataGrid y en la API
  const handleDelete = async (id, endpoint) => {
    try {
      await fetch(`${endpoint}/${id}`, { method: 'DELETE' });
      setRows(rowsTotal.map(row => 
        row.id === id ? { ...row, status: false } : row
    ));
    } catch (error) {
      console.error('Error deleting row:', error);
    }
  };

  const handleRestore = async (id, endpoint) => {
    try {
      await fetch(`${endpoint}/restore/${id}`, { method: 'PUT' });
      setRows(rowsTotal.map(row => 
        row.id === id ? { ...row, status: true } : row
    ));
    } catch (error) {
      console.error('Error deleting row:', error);
    }
  };

  return (
    <DataGridContext.Provider value={{ rows, handleCreate, handleEdit, handleDelete, fetchData, handleRestore }}>
      {children}
    </DataGridContext.Provider>
  );
};

// Hook para usar el contexto
export const useDataGrid = () => useContext(DataGridContext);
