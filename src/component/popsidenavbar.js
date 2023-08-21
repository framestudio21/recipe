import styles from "./styles/popsidenavbar.module.css"

import Link from "next/link";
import { BsArrowBarRight, BsArrowBarLeft } from 'react-icons/bs';

export default function popsidenavbar() {
  return (
    <>
    <div className={styles.sideNavbarItemDiv}>
            <div className={styles.sideNavbarItemDivheader}>Indian Recipe <button><BsArrowBarLeft/></button></div>
            <div className={styles.sideNavbarItemList}>
            <p>Recipe Type</p>
            <Link href="#" className={styles.sideNavbarItemListLink}>vegeterian <BsArrowBarRight/></Link>
            <Link href="#" className={styles.sideNavbarItemListLink}>non-vegeterian <BsArrowBarRight/></Link>
            </div>

            <div className={styles.sideNavbarItemList}>
            <p>State</p>
            <Link href="#" className={styles.sideNavbarItemListLink}>West Bengal <BsArrowBarRight/></Link>
            <Link href="#" className={styles.sideNavbarItemListLink}>Sikim <BsArrowBarRight/></Link>
            <Link href="#" className={styles.sideNavbarItemListLink}>Manipur <BsArrowBarRight/></Link>
            <Link href="#" className={styles.sideNavbarItemListLink}>Oridsha <BsArrowBarRight/></Link>
            </div>
            
            <div className={styles.sideNavbarItemList}>
            <p>State</p>
            <Link href="#" className={styles.sideNavbarItemListLink}>West Bengal <BsArrowBarRight/></Link>
            <Link href="#" className={styles.sideNavbarItemListLink}>Sikim <BsArrowBarRight/></Link>
            <Link href="#" className={styles.sideNavbarItemListLink}>Manipur <BsArrowBarRight/></Link>
            <Link href="#" className={styles.sideNavbarItemListLink}>Oridsha <BsArrowBarRight/></Link>
            </div>
            
            <div className={styles.sideNavbarItemList}>
            <p>State</p>
            <Link href="#" className={styles.sideNavbarItemListLink}>West Bengal <BsArrowBarRight/></Link>
            <Link href="#" className={styles.sideNavbarItemListLink}>Sikim <BsArrowBarRight/></Link>
            <Link href="#" className={styles.sideNavbarItemListLink}>Manipur <BsArrowBarRight/></Link>
            <Link href="#" className={styles.sideNavbarItemListLink}>Oridsha <BsArrowBarRight/></Link>
            </div>
            
        </div>
    </>
  )
}
