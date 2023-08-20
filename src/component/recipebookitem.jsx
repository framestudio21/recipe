import Image from "next/image";
import Link from "next/link";

import styles from "./styles/recipebookitem.module.css";
import img from "../image/img1.jpg";

export default function recipebookitem() {
  return (
    <div className={styles.recipebookitem}>
      <div className={styles.left}>
        <Image
          width={320}
          height={180}
          objectFit="cover"
          src={img}
          alt="img"
          className={styles.img}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.path}>
          <span>recipes</span> &gt; <span>cuisine</span> &gt; <span>latin american</span> &gt; <span>caribban</span>
        </div>
        <h2 className={styles.recipe}>cuban ropa vieja</h2>
        <div className={styles.ratingsandreviews}>
          <div className={styles.ratings}><Link href='#'>4.4 (736)</Link></div>
          <div className={styles.reviews}><Link href='#'>228 reviews</Link></div>
        </div>
        <p className={styles.paragraph}>recipebookitem</p>
        <p className={styles.author}>
          <span>
            Recipe by <strong><Link href='#'>Kate Phillips Masterson</Link></strong>
          </span>
          <span>Updated on February 25, 2023</span>
        </p>
        <p className={styles.testedby}>
          Tested by <strong><Link href='#'>Allrecipes test Kitchen</Link></strong>
        </p>
        <div className={styles.btns}>
            <button className={styles.save}>save</button>
            <button className={styles.share}>share</button>
        </div>
      </div>
    </div>
  );
}
