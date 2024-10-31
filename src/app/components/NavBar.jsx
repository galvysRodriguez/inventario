import { IconNav } from "./IconNav"
import styles from './style.module.css'

const globalNavBar = {
    home: {
        icon: 'home.png',
        text: 'Inicio'
    }, 
    move: {
        icon: 'move.png',
        text: 'Movimientos'
    }, 
    product: {
        icon: 'product.png',
        text: 'Productos'
    }, 
    profile: {
        icon: 'profile.png',
        text: 'Perfil'
    }, 
}
export function Navbar(){
    return(
        <nav className={styles.navBar}>
            <IconNav 
                icon={globalNavBar.home.icon}
                text={globalNavBar.home.text}
            />
            <IconNav 
                icon={globalNavBar.move.icon}
                text={globalNavBar.move.text}
            />
            <IconNav 
                icon={globalNavBar.product.icon}
                text={globalNavBar.product.text}
            />
            <IconNav 
                icon={globalNavBar.profile.icon}
                text={globalNavBar.profile.text}
            />
        </nav>
    )
}