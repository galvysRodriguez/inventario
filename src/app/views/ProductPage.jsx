import styles from "@/app/page.module.css"
import { useState, useEffect } from "react";
import ColumnSelectorGrid from "@/app/components/usoMui/DataGridMui"
import { COLUMN_PRODUCT as columns } from "@/app/utils/columns";
import { SkeletonDatagrid } from "@/app/components/usoMui/SkeletonDatagrid";
import { textfieldProduct } from "../utils/textfield";
import { getRowsVisble } from "../api/optionApi";
import { ENDPOINT_CATEGORY } from "../utils/const";

export default function CategoryPage() {
  const [loading, setLoading] = useState(true);
  const[category, SetCategory] = useState({})

  useEffect(() => {
    setTimeout(() => {
      const valor = async ( ) =>{
        const result  = await getRowsVisble(ENDPOINT_CATEGORY)
        console.log(result)
        SetCategory(result)
      }
        valor()
      setLoading(false);
    }, 2000); // Simula la carga de datos
  }, []);
  return (
        <section className={styles.page}>
            <h1>Productos</h1>
            {loading ? 
              <SkeletonDatagrid></SkeletonDatagrid>:
              <ColumnSelectorGrid columns={columns} textfield={textfieldProduct} title={"Producto"} options={category}> 
              </ColumnSelectorGrid>}
        </section>
        
  );
}