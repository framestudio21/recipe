import { useEffect } from "react";
import Image from "next/image";

import styles from "./styles/trending.module.css";

import img from "../image/img1.jpg";

export default function Trending() {
  useEffect(() => {}, []);

  return (
    <div className={styles.trending}>
      <div className={styles.list}>
        <div className={styles.child}>
          <Image src={img} width={0} height={0} className={styles.image}/>
        </div>
        <div className={styles.child}>
          <Image src={img} width={0} height={0} className={styles.image}/>
        </div>
        <div className={styles.child}>
          <Image src={img} width={0} height={0} className={styles.image}/>
        </div>
        <div className={styles.child}>
          <Image src={img} width={0} height={0} className={styles.image}/>
        </div>
        <div className={styles.child}>
          <Image src={img} width={0} height={0} className={styles.image}/>
        </div>
        <div className={styles.child}>
          <Image src={img} width={0} height={0} className={styles.image}/>
        </div>
        <div className={styles.child}>
          <Image src={img} width={0} height={0} className={styles.image}/>
        </div>
      </div>
      <div className={styles.btm}></div>
    </div>
  );
}
