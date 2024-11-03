import { useDataGrid, useRowsActions } from "../context/datagrid"
import { useEffect } from "react"

export function useFetchData(){
    const{endpoint} = useDataGrid()
    const {handleRows} = useRowsActions()

    useEffect(() => {
        const result = async() => {
            handleRows();
        }
        result()
      }, [endpoint]);
}