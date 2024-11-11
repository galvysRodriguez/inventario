import styles from "@/app/page.module.css"
import { useState, useEffect } from "react";
import ColumnSelectorGrid from "@/app/components/usoMui/DataGridMui"
import { COLUMN_MOVE as columns } from "@/app/utils/columns";
import { SkeletonDatagrid } from "@/app/components/usoMui/SkeletonDatagrid";
import { getRowsMoveInput } from "../api/control";
import ReportTable from "../components/usoMui/ReportTable";

export default function MoveInputPage() {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([])

  useEffect(() => {
    const fetchData = async () => {
        try {
          const result = await getRowsMoveInput();
          setRows(result) // Espera a que se complete handleRows
        } catch (error) {
          console.error("Error al obtener filas:", error); // Manejo de errores
        }
        finally{
          setLoading(false);
        }
      };

      const timeoutId = setTimeout(fetchData, 200); 

      return () => clearTimeout(timeoutId);
  }, []);
  return (
        <section className={styles.page}>
            <h1>Entradas</h1>
            {loading ? 
              <SkeletonDatagrid></SkeletonDatagrid>:
              <ReportTable columns={columns} rows={rows}></ReportTable>}
        </section>
        
  );
}