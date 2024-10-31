import styles from './style.module.css'

export function SecondaryButton({action, text}){
    return (
        <button className={styles.secondaryButton} onClick={action}>
            {text}
        </button>
    )
}