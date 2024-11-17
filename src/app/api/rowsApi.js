import { API_URL } from "../../../config";

export const keyFirstId = (arr) => {
    arr.forEach((objeto) => {
      const claves = Object.keys(objeto); // Obtener las claves del objeto
      const primeraClave = claves[0]; // Obtener la primera clave
      objeto['id'] = objeto[primeraClave]; // Asignar el valor a 'id'
      delete objeto[primeraClave]; // Eliminar la primera clave original
    });

    return arr
  };


export const createRow = async (newRow, endpoint) => {
    console.log(newRow)
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRow),
    });
    if (!response.ok) throw new Error('Error creating row');
    const data = await response.json();
    const result = keyFirstId(data.data)
    return result[0];
  };

  export const getRows = async (endpoint) => {
    const response = await fetch(`${API_URL}${endpoint}`);
    
    if (!response.ok) throw new Error('Error get rows');
    const data = await response.json();
    const result = keyFirstId(data.data)
    return result;
  };

  export const getRow = async (id, endpoint) => {
    const response = await fetch(`${API_URL}${endpoint}/${id}`);
    if (!response.ok) throw new Error('Error get row');
    return response.json();
  };
  
  
  export const updateRow = async (updatedRow, endpoint) => {
    const response = await fetch(`${API_URL}${endpoint}/${updatedRow.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedRow),
    });
    if (!response.ok) throw new Error('Error updating row');
  };
  
  export const deleteRow = async (id, endpoint) => {
    const response = await fetch(`${API_URL}${endpoint}/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Error deleting row');
  };
  
  export const restoreRow = async (id, endpoint) => {
    const response = await fetch(`${API_URL}${endpoint}/restore/${id}`, { method: 'PUT' });
    if (!response.ok) throw new Error('Error restoring row');
  };
  