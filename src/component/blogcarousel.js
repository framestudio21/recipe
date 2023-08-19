import styles from "./styles/blogcarousel.module.css";

import img from "../image/img1.jpg";

import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export default function blogcarousel() {
  return (
    <>
      <div className={styles.blogcarouselbody}>
        <div className={styles.title}>our blog</div>
        <div className={styles.blog}>

          <div className={styles.blogbody}>
            <Image
              className={styles.blogimage}
              width={0}
              height={0}
              src={img}
            />
            <div className={styles.blogtext}>
              <div className={styles.blogtitle}>
                this salad is food for family
              </div>
              <div className={styles.blogparagraph}>
                eating with your family is a traditionwhile going to a eating
                with your family is a traditionwhile going to a eating with your
                family is a traditionwhile going to a eating with your family is
                a traditionwhile going to a
              </div>
              <div className={styles.bloglink}>
                <Link href="#">read more ...</Link>
              </div>
            </div>
          </div>

          <div className={styles.blogbody}>
            <Image
              className={styles.blogimage}
              width={0}
              height={0}
              src={img}
            />
            <div className={styles.blogtext}>
              <div className={styles.blogtitle}>
                this salad is food for family
              </div>
              <div className={styles.blogparagraph}>
                eating with your family is a traditionwhile going to a eating
                with your family is a traditionwhile going to a eating with your
                family is a traditionwhile going to a eating with your family is
                a traditionwhile going to a
              </div>
              <div className={styles.bloglink}>
                <Link href="#">read more ...</Link>
              </div>
            </div>
          </div>

          <div className={styles.blogbody}>
            <Image
              className={styles.blogimage}
              width={0}
              height={0}
              src={img}
            />
            <div className={styles.blogtext}>
              <div className={styles.blogtitle}>
                this salad is food for family
              </div>
              <div className={styles.blogparagraph}>
                eating with your family is a traditionwhile going to a eating
                with your family is a traditionwhile going to a eating with your
                family is a traditionwhile going to a eating with your family is
                a traditionwhile going to a
              </div>
              <div className={styles.bloglink}>
                <Link href="#">read more ...</Link>
              </div>
            </div>
          </div>

          {/* <div className={styles.blogbody}>
            <Image
              className={styles.blogimage}
              width={0}
              height={0}
              src={img}
            />
            <div className={styles.blogtext}>
              <div className={styles.blogtitle}>
                this salad is food for family
              </div>
              <div className={styles.blogparagraph}>
                eating with your family is a traditionwhile going to a eating
                with your family is a traditionwhile going to a eating with your
                family is a traditionwhile going to a eating with your family is
                a traditionwhile going to a
              </div>
              <div className={styles.bloglink}>
                <Link href="#">read more ...</Link>
              </div>
            </div>
          </div> */}

        </div>
        <div className={styles.btn}>
          <Link href="/blog">
            <button>more blog</button>
            <button className={styles.btnicon}>
              <BsArrowUpRight />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
