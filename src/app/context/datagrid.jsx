import { createContext, useContext, useReducer, useEffect } from 'react';
import { createRow,  updateRow, restoreRow, deleteRow, getRows} from '../api/rowsApi';

const ACTIONS = {
    SET_ROWS: 'SET_ROWS',
    ADD_ROW: 'ADD_ROW',
    UPDATE_ROW: 'UPDATE_ROW',
    DELETE_ROW: 'DELETE_ROW',
    RESTORE_ROW: 'RESTORE_ROW',
};
  
  function rowsReducer(state, action) {
    switch (action.type) {
      case ACTIONS.SET_ROWS:
        return action.payload;
      case ACTIONS.ADD_ROW:
        return [...state, action.payload];
      case ACTIONS.UPDATE_ROW:
        return state.map((row) => 
          row.id === action.payload.id 
              ? { ...row, ...action.payload } // Asegúrate de mezclar los campos existentes
              : row
      );
      case ACTIONS.DELETE_ROW:
        return state.map((row) => (row.id === action.payload ? { ...row, visible: false } : row));
      case ACTIONS.RESTORE_ROW:
        return state.map((row) => (row.id === action.payload ? { ...row, visible: true } : row));
      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
}

const DataGridContext = createContext();
// Proveedor del contexto
export const DataGridProvider = ({ children, endpoint }) => {
   const [rows, dispatch] = useReducer(rowsReducer, []);
  
  return (
    <DataGridContext.Provider value={{ rows, dispatch, endpoint}}>
      {children}
    </DataGridContext.Provider>
  );
};

// Hook para usar el contexto
export const useDataGrid = () => useContext(DataGridContext);

export function useRowsActions() {
  const { dispatch, endpoint, rows } = useContext(DataGridContext);

  const handleCreate = async (newRow) => {
    try {
      const createdRow = await createRow(newRow, endpoint);
      const combinedRow = {
        ...newRow,        // Propiedades de newRow
        ...createdRow     // Sobrescribe con id y visible de createdRow
      };
      dispatch({ type: ACTIONS.ADD_ROW, payload: combinedRow });
    } catch (error) {
      console.error('Error creating row:', error);
    }
  };

  const handleEdit = async (updatedRow) => {
    try {
      await updateRow(updatedRow, endpoint);
      console.log(updateRow)
      dispatch({ type: ACTIONS.UPDATE_ROW, payload: updatedRow });
    } catch (error) {
      console.error('Error updating row:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteRow(id, endpoint);
      dispatch({ type: ACTIONS.DELETE_ROW, payload: id });
      console.log(rows)
    } catch (error) {
      console.error('Error deleting row:', error);
    }
  };

  const handleRestore = async (id) => {
    try {
      await restoreRow(id, endpoint);
      dispatch({ type: ACTIONS.RESTORE_ROW, payload: id });
      console.log(rows)
    } catch (error) {
      console.error('Error restoring row:', error);
    }
  };

  const handleRows = async () => {
    try {
      const data = await getRows(endpoint);
      dispatch({ type: ACTIONS.SET_ROWS, payload: data });
    } catch (error) {
      console.error('Error restoring row:', error);
    }
  };

  return { handleCreate, handleEdit, handleDelete, handleRestore, handleRows };
}
