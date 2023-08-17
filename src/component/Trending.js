import { useEffect } from 'react'
import styles from '@/component/styles/trending.module.css'
export default function Trending() {

    useEffect(()=>{
    },[])

  return (
    <div className={styles.trending}>
        <div className={styles.list}>
            <div className={styles.child}>1</div>
            <div className={styles.child}>2</div>
            <div className={styles.child}>3</div>
            <div className={styles.child}>4</div>
            <div className={styles.child}>5</div>
            <div className={styles.child}>6</div>
            <div className={styles.child}>7</div>
        </div>
        <div className={styles.btm}></div>
    </div>
  )
}