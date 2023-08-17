import styles from "./styles/gallerycarousel.module.css"

import img from "../image/img1.jpg"

import Link from "next/link"
import Image from "next/image"
import { BsArrowUpRight } from 'react-icons/bs';


export default function gallerycarousel() {
  return (
    <>
    <div className={styles.gallerycarousel}>
    <div className={styles.title}>Our Gallery</div>
    <div className={styles.gallerybody}>
    <Link href="#" className={styles.imageDiv1}><Image className={styles.img} width={0} height={0} src={img} alt="img"/></Link>
    <Link href="#" className={styles.imageDiv2}><Image className={styles.img} width={0} height={0} src={img} alt="img"/></Link>
    <Link href="#" className={styles.imageDiv3}><Image className={styles.img} width={0} height={0} src={img} alt="img"/></Link>
    <Link href="#" className={styles.imageDiv4}><Image className={styles.img} width={0} height={0} src={img} alt="img"/></Link>
    <Link href="#" className={styles.imageDiv5}><Image className={styles.img} width={0} height={0} src={img} alt="img"/></Link>
    <Link href="#" className={styles.imageDiv6}><Image className={styles.img} width={0} height={0} src={img} alt="img"/></Link>
    </div>
    <div className={styles.btn}>
    <Link href="/gallery">
        <button>more Images</button>
        <button className={styles.btnicon}><BsArrowUpRight/></button>
      </Link>
    </div>
    </div>
    </>
  )
}
