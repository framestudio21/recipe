import Link from 'next/link';

import { FaSearch, FaBell } from 'react-icons/fa';

import styles from "./styles/navbar.module.css"

export default function navbar() {
  return (
    <>
    <div className={styles.navbar}>
        <Link href="/" className={styles.logo}>recipe.in</Link>
        <div className={styles.navbarlink}>
            <Link href="/" className={styles.navListItem}>Home</Link>
            <Link href="/blog" className={styles.navListItem}>Blog</Link>
            <Link href="/gallery" className={styles.navListItem}>Gallery</Link>
            <Link href="/recipebook" className={styles.navListItem}>recipebook</Link>
            <Link href="/about" className={styles.navListItem}>About</Link>
        </div>
        <div className={styles.navbaricon}>
        <div className={styles.search}><FaSearch/></div>
        <div className={styles.notification}><FaBell/></div>
        </div>
    </div>
    </>
  )
}
