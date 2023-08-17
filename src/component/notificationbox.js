import styles from "./styles/notificationbox.module.css"
import img from "../image/img1.jpg"

import { AiFillCloseCircle } from 'react-icons/ai';

import Image from "next/image";
import Link from "next/link";

export default function notificationbox() {
  return (
    <>
    <div className={styles.notificationbox}>
        <div className={styles.boxHeader}>notification box <button className={styles.closebtn}><AiFillCloseCircle /></button></div>
        <div className={styles.boxnotification}>

          <div className={styles.notification}>
            <div className={styles.notificationImage}>
                <Image
                className={styles.image}
                width={0}
                height={0}
                alt="notification-image"
                src={img}/>
            </div>
            <div className={styles.notificationTextSection}>
             <div className={styles.notificationTextHeader}>Chiken Currey Recipe</div>
             <div className={styles.notificationTextParagraph}>Chicken curry is one of those things that you can make in a ton of ways, but this recipe is a guaranteed hit. It gets made in a jiffy and packs a punch no matter what you accompany it with. In this recipe chicken on the bone is cooked in a flavourful masala made with ginger, garlic, onions, tomatoes and select spices till the meat is perfectly cooked, succulent and falls of the bone. If you want to have a good fool proof chicken curry – this recipe is a must try.</div>
             <div className={styles.notificationTextBtn}>
              <Link href="#"><button>Interested</button></Link>
              <button>Dismissed</button>
            </div>
            </div>
           </div>
        </div>
    </div>
    </>
  )
}