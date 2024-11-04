import styles from "@/app/page.module.css"
import { useState, useEffect } from "react";
import ColumnSelectorGrid from "@/app/components/usoMui/DataGridMui"
import { COLUMN_CATEGORY as columns } from "@/app/utils/columns";
import { SkeletonDatagrid } from "@/app/components/usoMui/SkeletonDatagrid";
import { textfieldCategory } from "../utils/textfield";

export default function CategoryPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simula la carga de datos
  }, []);
  return (
        <section className={styles.page}>
            <h1>Categorias</h1>
            {loading ? 
              <SkeletonDatagrid></SkeletonDatagrid>:
              <ColumnSelectorGrid columns={columns} textfield={textfieldCategory} title={"Categoria"}> 
              </ColumnSelectorGrid>}
        </section>
        
  );
}
