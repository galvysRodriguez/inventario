"use client"
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { columnsWithDelete, columnsDelete } from '@/app/utils/columnsWithDelete';


export default function ReportTable({columns, rows}) {
  
  return (
        <>
          
            <div style={{ height: 800, width: '100%', padding: '1rem', display: 'flex', flexDirection:'column', gap:'1rem' }}>
           
          <DataGrid
              editMode="row"
              rows={rows}
              columns={columns}
              slots={{
                toolbar: GridToolbar,
              }}
              style={{ padding: '1rem'}}
              pageSize={8}
              disableSelectionOnClick
          />

          
          </div>
       
        </>
        
        
  );
}
