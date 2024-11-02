import styles from "@/app/page.module.css"
import StickyHeadTable from "@/app/components/usoMui/MuiTable";
import '@/app/globals.css'
import { rows, columns } from "@/app/components/usoMui/rowsTest";
import { InputProduct } from "@/app/components/textfield/InputProduct";
import FormDialog from "@/app/components/usoMui/ModalForm";

export default function ProductPage() {
  return (
        <section className={styles.page}>
            <h1>Productos</h1>
            <FormDialog title={"Producto"}>
              <InputProduct></InputProduct>
            </FormDialog>
            <StickyHeadTable columns={columns} rows={rows}></StickyHeadTable>
        </section>
  );
}
