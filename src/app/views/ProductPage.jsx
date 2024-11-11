import styles from "@/app/page.module.css"
import { useState, useEffect } from "react";
import ColumnSelectorGrid from "@/app/components/usoMui/DataGridMui"
import { COLUMN_PRODUCT as columns } from "@/app/utils/columns";
import { SkeletonDatagrid } from "@/app/components/usoMui/SkeletonDatagrid";
import { textfieldProduct } from "../utils/textfield";
import { getRowsVisble } from "../api/optionApi";
import { ENDPOINT_CATEGORY } from "../utils/const";
import { Suspense } from "react";

export default function CategoryPage() {
  const [loading, setLoading] = useState(false);
  const[category, SetCategory] = useState({})

  useEffect(() => {
 
      const valor = async ( ) =>{
        const result  = await getRowsVisble(ENDPOINT_CATEGORY)
        SetCategory(result)
      }
        valor()
      
    // Simula la carga de datos
  }, []);
  return (
        <section className={styles.page}>
            <h1>Productos</h1>
            {loading ? 
              <SkeletonDatagrid></SkeletonDatagrid>:
              <Suspense fallback={<SkeletonDatagrid></SkeletonDatagrid>}>
                  <ColumnSelectorGrid columns={columns} textfield={textfieldProduct} title={"Producto"} options={category}> 
                  </ColumnSelectorGrid>
                </Suspense>}
        </section>
        
  );
}