'use client';
import styles from "../page.module.css"
import ChartApex from "../components/chartBasic";
import { useState, useEffect } from "react"
import { CardDashboard } from "../components/CardDashboard"
import { DynamicBackground} from "../components/usoMui/DynamicBackground"
import { getStockMax, getStockMin, getStockNot } from "../api/stock"

const content = "Productos agotados"
const contentMin = "Productos en mínimo"
const contentMax = "Productos en máximo"

export default function IndexPage() {
  const[min, setMin] = useState()
  const[max, setMax] = useState()
  const[not, setNot] = useState()

  useEffect(() => {
    const valor = async ( ) =>{
        const [resultMin, resultMax, resultNot] = await Promise.all([
            getStockMin(),
            getStockMax(),
            getStockNot()
        ]);
        
        setMin(resultMin)
        setMax(resultMax)
        setNot(resultNot)
        }
    valor()


  }, []);
  return (
    <section className={styles.page}>
      <h1>Inventario</h1>
     <section className={styles.containerCardDashboard}>
        <DynamicBackground>
          <CardDashboard 
              content={content}
              num={not}
          />
        </DynamicBackground>
        <DynamicBackground>
        <CardDashboard 
            content={contentMin}
            num={min}
        />
        </DynamicBackground>
       <DynamicBackground>
        <CardDashboard 
              content={contentMax}
              num={max}
          />
       </DynamicBackground>
        
     </section>
      <ChartApex/>
    </section>
  );
}
