import { MenuItems } from "./MenuItems";
import logo from 'resources/logo.svg';
import styles from './Navbar.module.css'; 

// Component inspired by https://www.youtube.com/watch?v=fL8cFqhTHwA
export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <h1 className={styles.logo}>
                <span className={styles.logoItem}><img src={logo}/></span>  
                <span className={styles.logoItem}>CocoaHub</span>       
            </h1>
            <ul className={styles.menu}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={styles.links} href={item.url}>
                            {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar