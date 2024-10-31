import styles from './style.module.css'

export function CardDashboard({content, num}){
    return (
        <article className={styles.cardDashboard} >
            <strong className={styles.cardDashboardContent}>{content}</strong>
            <strong className={styles.cardDashboardInfo}>{num}</strong>
        </article>
    )
}