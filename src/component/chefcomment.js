import styles from "./styles/chefcomment.module.css"

import Image from "next/image"

export default function chefcomment() {
  return (
    <>
    <div className={styles.chefcomment}>
        <div className={styles.chefcommentTitle}>
            what they say
        </div>
        <div className={styles.commentbody}>
            <div className={styles.commentimagebody}></div>
            <div className={styles.commenttextbody}></div>
        </div>
    </div>
    </>
  )
}
