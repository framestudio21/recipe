import Image from 'next/image'

import img from '../image/food.jpg'
import styles from './styles/trendingrecipes.module.css'

export default function trendingRecipes() {
  return (
    <div className={styles.trendingRecipes}>
        <div className={styles.top}>
            <div className={styles.container}>
                <h2 className={styles.recipe}>Tomato Recipes</h2>
                <p className={styles.rating}>Make the most of tomato season with these 5 star recipes.</p>
            </div>
        </div>
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

        </div>
    </div>
  )
}