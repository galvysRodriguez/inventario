import Image from "next/image"
import styles from './style.module.css'

const pathImage = '/images/icons/'
const altIcon = 'icono de navegacion de '

export function IconNav({icon, text}){
    return (
        <div className={styles.iconNav}>
            <Image
                src={`${pathImage}${icon}`}
                alt={`${altIcon}${text}`}
                width={24}
                height={24}
            />
            <span>{text}</span>
        </div>
    )
}