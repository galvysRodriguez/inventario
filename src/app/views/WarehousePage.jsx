import styles from "@/app/page.module.css"
import { useState, useEffect } from "react";
import ColumnSelectorGrid from "@/app/components/usoMui/DataGridMui"
import { COLUMN_WAREHOUSE as columns } from "@/app/utils/columns";
import { SkeletonDatagrid } from "@/app/components/usoMui/SkeletonDatagrid";
import { textfieldWarehouse } from "../utils/textfield";
import { ENDPOINT_LOCATION } from "../utils/const";
import { getRowsVisble } from "../api/optionApi";

export default function WarehousePage() {
  const [loading, setLoading] = useState(false);
  const[location, SetLocation] = useState({})

  useEffect(() => {
      const valor = async ( ) =>{
          const result  = await getRowsVisble(ENDPOINT_LOCATION)
          SetLocation(result)
        }
          valor()
    setLoading(false);
  }, []);
  return (
        <section className={styles.page}>
            <h1>Depositos</h1>
            {loading ? 
              <SkeletonDatagrid></SkeletonDatagrid>:
              <ColumnSelectorGrid columns={columns} textfield={textfieldWarehouse} title={"Deposito"} options={location}> 
              </ColumnSelectorGrid>}
        </section>
        
  );
}
