import styles from "@/app/page.module.css"
import StickyHeadTable from "@/app/components/usoMui/MuiTable";
import ColumnSelectorGrid from "@/app/components/usoMui/DataGridMui"

const columns= [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Nombre', width: 200 },
  { field: 'age', headerName: 'Edad', width: 100 },
];

const rows= [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
];


export default function CategoryPage() {
  return (
        <section className={styles.page}>
            <h1>Categorias</h1>
            <ColumnSelectorGrid rows={rows} columns={columns}> </ColumnSelectorGrid>
        </section>
        
  );
}
