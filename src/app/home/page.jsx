import styles from "../page.module.css"
import ApexChart from "../components/ChartApex"
import { CardDashboard } from "../components/CardDashboard"
import { DynamicBackground} from "../components/usoMui/DynamicBackground"


const content = "Productos agotados"
  const contentMin = "Productos en mínimo"
  const contentMax = "Productos en máximo"
  const num = 42;
export default function HomePage() {
  return (
    <section className={styles.page}>
      <h1>Inventario</h1>
     <section className={styles.containerCardDashboard}>
        <DynamicBackground>
          <CardDashboard 
              content={content}
              num={num}
          />
        </DynamicBackground>
        <DynamicBackground>
        <CardDashboard 
            content={contentMin}
            num={num}
        />
        </DynamicBackground>
       <DynamicBackground>
        <CardDashboard 
              content={contentMax}
              num={num}
          />
       </DynamicBackground>
        
     </section>
      <ApexChart/>
    </section>
  );
}
