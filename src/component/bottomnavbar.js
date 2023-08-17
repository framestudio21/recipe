import Link from "next/link"

import { RxHamburgerMenu } from 'react-icons/rx';

import styles from "./styles/bottomnavbar.module.css"

export default function bottomnavbar() {
  return (
    <>
    <div className={styles.navbar}>
            <li className={styles.listItem}><div className={styles.hamburger}><RxHamburgerMenu className={styles.icon} /> All</div></li>
            <li className={styles.listItem}><Link href="/trending" className={styles.navListItem}>trending list</Link></li>
            <li className={styles.listItem}><Link href="/indian" className={styles.navListItem}>Indian</Link></li>
            <li className={styles.listItem}><Link href="/bengali" className={styles.navListItem}>bengali</Link></li>
            <li className={styles.listItem}><Link href="/southindian" className={styles.navListItem}>south indian</Link></li>   
            <li className={styles.listItem}><Link href="/france" className={styles.navListItem}>france</Link></li>
            <li className={styles.listItem}><Link href="/italy" className={styles.navListItem}>italy</Link></li>
            <li className={styles.listItem}><Link href="/america" className={styles.navListItem}>america</Link></li>
            <li className={styles.listItem}><Link href="/northkorea" className={styles.navListItem}>north korea</Link></li>
            <li className={styles.listItem}><Link href="/china" className={styles.navListItem}>china</Link></li>
            <li className={styles.listItem}><Link href="/japan" className={styles.navListItem}>japan</Link></li>
            <li className={styles.listItem}><Link href="/london" className={styles.navListItem}>london</Link></li>
    </div>
    </>
  )
}