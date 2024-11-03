import styles from "@/app/page.module.css"
import { useState, useEffect } from "react";
import ColumnSelectorGrid from "@/app/components/usoMui/DataGridMui"
import { COLUMN_CATEGORY as columns } from "@/app/utils/columns";
import { SkeletonDatagrid } from "@/app/components/usoMui/SkeletonDatagrid";
import { DataGridProvider } from "../context/datagrid";
import { ENDPOINT_CATEGORY } from "../utils/const";
import { getRows } from "../api/rowsApi";


const rows= [
  { id: 1, name: 'Computadoras', status: true },
  { id: 2, name: 'Telefonos', status: true },
];


export default function CategoryPage() {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setRows([
        { id: 1, name: 'Computadoras', status: true },
        { id: 2, name: 'Telefonos', status: true },
        { id: 11, name: 'Computadoras', status: true },
        { id: 22, name: 'Telefonos', status: true },
        { id: 111, name: 'Computadoras', status: true },
        { id: 222, name: 'Telefonos', status: true },
        { id: 10, name: 'Computadoras', status: true },
        { id: 20, name: 'Telefonos', status: true },
        { id: 100, name: 'Computadoras', status: true },
        { id: 200, name: 'Telefonos', status: true },
        { id: 11, name: 'Computadoras', status: true },
        { id: 21, name: 'Telefonos', status: true },
        { id: 101, name: 'Computadoras', status: true },
        { id: 201, name: 'Telefonos', status: true },
      ]);
      setLoading(false);
    }, 2000); // Simula la carga de datos
  }, []);
  return (
        <section className={styles.page}>
            <h1>Categorias</h1>
            {loading ? 
              <SkeletonDatagrid></SkeletonDatagrid>:
              <ColumnSelectorGrid columns={columns}> </ColumnSelectorGrid>}
        </section>
        
  );
}
