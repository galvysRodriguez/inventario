import styles from "@/app/page.module.css"
import StickyHeadTable from "@/app/components/usoMui/MuiTable";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import { SecondaryButton } from "@/app/components/SecondaryButton";
import '@/app/globals.css'
import { rows, columns } from "@/app/components/usoMui/rowsTest";
import { useState } from "react";
import ModalForm from "@/app/components/usoMui/ModalForm";
import { InputProduct } from "./FormProduct";
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
