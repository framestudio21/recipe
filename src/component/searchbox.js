import Link from "next/link";

import styles from "./styles/searchbox.module.css"

import { GrClose } from 'react-icons/gr';

export default function searchbox() {
  return (
    <div className={styles.searchboxMainbody}>
      <div className={styles.searchbox}>
        <div className={styles.search}>
            <input type="search" placeholder="Search a recipe..."/>
        </div>
        <div className={styles.listItem}>
            <li className={styles.searchList}><Link href="#">Indian</Link></li>
            <li className={styles.searchList}><Link href="#">south Indian</Link></li>
            <li className={styles.searchList}><Link href="#">North Indian</Link></li>
            <li className={styles.searchList}><Link href="#">west bengal</Link></li>
            <li className={styles.searchList}><Link href="#">Asia</Link></li>
            <li className={styles.searchList}><Link href="#">America</Link></li>
            <li className={styles.searchList}><Link href="#">London</Link></li>

        </div>
        <button className={styles.closebtn}><GrClose/></button>
    </div>
    </div>
  )
}
