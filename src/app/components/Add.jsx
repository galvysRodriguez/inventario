import styles from './style.module.css'
import Image from 'next/image'


const addText = 'añadir elemento'
const addSrc = '/images/icons/add.png'

export function Add(){
    return (
        <button className={styles.Add}>
            <Image
                src={addSrc}
                alt={addText}
                width={16}
                height={16}
            />
        </button>
    )
}