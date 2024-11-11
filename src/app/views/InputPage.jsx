import styles from "@/app/page.module.css"
import { useState, useEffect } from "react";
import ColumnSelectorGrid from "@/app/components/usoMui/DataGridMui"
import { COLUMN_INPUT as columns } from "@/app/utils/columns";
import { SkeletonDatagrid } from "@/app/components/usoMui/SkeletonDatagrid";
import { textfieldInput } from "../utils/textfield";
import { ENDPOINT_WAREHOUSE, ENDPOINT_PRODUCT } from "../utils/const";
import { getRowsVisble } from "../api/optionApi";

export default function InputPage() {
  const[warehouse, SetWarehouse] = useState({})
  const[products, SetProducts] = useState({})

  useEffect(() => {
    const valor = async ( ) =>{
        const [resultWarehouse, resultProduct] = await Promise.all([
            getRowsVisble(ENDPOINT_WAREHOUSE),
            getRowsVisble(ENDPOINT_PRODUCT)
        ]);
        SetWarehouse(resultWarehouse);
        SetProducts(resultProduct);
        }
    valor()


  }, []);
  return (
        <section className={styles.page}>
            <h1>Recibidos</h1>
            <ColumnSelectorGrid columns={columns} textfield={textfieldInput} title={"Recibido"} 
                options={warehouse} optionProduct={products}/> 
        </section>
        
  );
}