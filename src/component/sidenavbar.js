import styles from "./styles/sidenavbar.module.css";

import Link from "next/link";

import { AiFillCloseCircle } from "react-icons/ai";
import { BsArrowBarRight } from "react-icons/bs";

export default function () {
  return (
    <>
      <div className={styles.sidenavbarMainbody}>
        <div className={styles.sidenavbar}>
          <div className={styles.sidenavbarlist}>
            <div className={styles.sideNavbarlistItemDiv}>
              <Link href="#">
                <li className={styles.sideNavbarItem}>Trending List</li>
              </Link>
              <Link href="#">
                <li className={styles.sideNavbarItem}>New Update</li>
              </Link>
            </div>
            <div className={styles.sideNavbarlistItemDiv}>
              <p className={styles.sideNavbarlistItemDivTitle}>Indian Recipe</p>
              <Link href="#">
                <li className={styles.sideNavbarItem}>
                  Trending List
                  <BsArrowBarRight />
                </li>
              </Link>
              <Link href="#">
                <li className={styles.sideNavbarItem}>
                  New Update
                  <BsArrowBarRight />
                </li>
              </Link>
            </div>
            <div className={styles.sideNavbarlistItemDiv}>
              <p className={styles.sideNavbarlistItemDivTitle}>Indian Recipe</p>
              <Link href="#">
                <li className={styles.sideNavbarItem}>
                  Trending List
                  <BsArrowBarRight />
                </li>
              </Link>
              <Link href="#">
                <li className={styles.sideNavbarItem}>
                  New Update
                  <BsArrowBarRight />
                </li>
              </Link>
            </div>
          </div>
        </div>
        <button className={styles.closebtn}>
          <AiFillCloseCircle className={styles.btnicon} />
        </button>
      </div>
    </>
  );
}
