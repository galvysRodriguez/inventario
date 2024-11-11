import styles from './style.module.css'

export function PrimaryButton({action, text}){
    return (
        <button className={styles.primaryButton} onClick={action}>
            {text}
        </button>
    )
}