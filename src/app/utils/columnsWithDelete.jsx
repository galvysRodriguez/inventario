import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import { Delete } from '@mui/icons-material';
import { useSelectorGrid } from '@/app/hooks/useSelectorGrid';
import { useRowsActions } from '../context/datagrid';

export const columnsWithDelete = (columns, handleEditClick) =>{
    const {handleDelete, handleRestore} = useRowsActions()
    console.log(columns)
    return (
        [
            ...columns,
            {
              field: 'actions',
              headerName: 'Acciones',
              renderCell: (params) =>
                (
                <>
                    <IconButton onClick={() => handleEditClick(params.row)}>
                        <Edit />
                    </IconButton>
                    {params.row.visible ? (
                      <IconButton onClick={() =>handleDelete(params.id)}>
                        <Delete />
                      </IconButton> // Ícono de activo
                    ) : (
                      <IconButton onClick={() =>handleRestore(params.id)}>
                        <AddCircle />
                      </IconButton>  // Ícono de desactivado
                    )}
                    
                </>
              ),
              width: 150,
            },
          ]
        )
  
}
    