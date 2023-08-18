import styles from "./styles/chefcomment.module.css"

import img from "../image/img1.jpg"

import Image from "next/image"
import { BsFillChatLeftQuoteFill } from 'react-icons/bs';

export default function chefcomment() {
  return (
    <>
    <div className={styles.chefcomment}>
        <div className={styles.chefcommentTitle}>
            what they say
        </div>
        <div className={styles.commentbody}>
            <div className={styles.commentimagebody}>
              <Image width={0} height={0} className={styles.image} src={img}/>
            </div>
            <div className={styles.commenttextbody}>
              <BsFillChatLeftQuoteFill className={styles.icon}/>
              <div className={styles.text}>becoming a cook is my dream since i was little, and here i have found a way to make it happen.</div>
              <div className={styles.author}>
                <div className={styles.name}>bran warrant</div>
                <div className={styles.title}>professional chef</div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}
