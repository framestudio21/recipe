import styles from './styles/whatnew.module.css'
import Image from 'next/image'
import img from "../image/food.jpg"
import { BsArrowRightShort } from 'react-icons/bs'

export default function whatNext() {
  return (
    <div className={styles.whatNew}>
        <div className={styles.heading}>What's New <BsArrowRightShort className={styles.icon}/></div>
        <div className={styles.bottom}>
            <div className={styles.container}>
                <Image
                    width={250}
                    height={160}
                    objectFit="cover"
                    src={img}
                    alt="img"
                    className={styles.img}
                />
                <p className={styles.tag}>caribban</p>
                <h3 className={styles.recipeName}>Cuban Ropa Vieja</h3>
                <p className={styles.rating}>736 Ratings</p>
            </div>

            <div className={styles.container}>
                <Image
                    width={250}
                    height={160}
                    objectFit="cover"
                    src={img}
                    alt="img"
                    className={styles.img}
                />
                <p className={styles.tag}>caribban</p>
                <h3 className={styles.recipeName}>Cuban Ropa Vieja</h3>
                <p className={styles.rating}>736 Ratings</p>
            </div>

            <div className={styles.container}>
                <Image
                    width={250}
                    height={160}
                    objectFit="cover"
                    src={img}
                    alt="img"
                    className={styles.img}
                />
                <p className={styles.tag}>caribban</p>
                <h3 className={styles.recipeName}>Cuban Ropa Vieja</h3>
                <p className={styles.rating}>736 Ratings</p>
            </div>

            <div className={styles.container}>
                <Image
                    width={250}
                    height={160}
                    objectFit="cover"
                    src={img}
                    alt="img"
                    className={styles.img}
                />
                <p className={styles.tag}>caribban</p>
                <h3 className={styles.recipeName}>Cuban Ropa Vieja</h3>
                <p className={styles.rating}>736 Ratings</p>
            </div>

            <div className={styles.container}>
                <Image
                    width={250}
                    height={160}
                    objectFit="cover"
                    src={img}
                    alt="img"
                    className={styles.img}
                />
                <p className={styles.tag}>caribban</p>
                <h3 className={styles.recipeName}>Cuban Ropa Vieja</h3>
                <p className={styles.rating}>736 Ratings</p>
            </div>

            <div className={styles.container}>
                <Image
                    width={250}
                    height={160}
                    objectFit="cover"
                    src={img}
                    alt="img"
                    className={styles.img}
                />
                <p className={styles.tag}>caribban</p>
                <h3 className={styles.recipeName}>Cuban Ropa Vieja</h3>
                <p className={styles.rating}>736 Ratings</p>
            </div>
        </div>
    </div>
  )
}
