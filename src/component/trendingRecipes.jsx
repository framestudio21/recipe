import Image from 'next/image'
import { PiClockCountdownFill } from 'react-icons/pi';
import { BiSolidUser } from 'react-icons/bi';

import img from '../image/img1.jpg'
import styles from './styles/trendingrecipes.module.css'

export function Recipecontainer () {
    return(
        <div className={styles.container}>
                <Image
                    width={250}
                    height={160}
                    objectFit="cover"
                    src={img}
                    alt="img"
                    className={styles.img}
                />
                <div className={styles.containerDetails}>
                <div className={styles.tag}>caribban</div>
                <div className={styles.recipeName}>Cuban Ropa Vieja</div>
                <div className={styles.nameBar}></div>
                <div className={styles.detailBottom}>
                    <div className={styles.serving}>
                        <div className={styles.servingTitle}>Serving</div>
                        <div className={styles.servingPerson}>
                            <BiSolidUser className={styles.servingPersonIcon}/>
                            <BiSolidUser className={styles.servingPersonIcon}/>
                        </div>
                    </div>
                    <div className={styles.bottomBar}></div>
                    <div className={styles.recipeTime}>
                        <div className={styles.timeTitle}>Cooking Time</div>
                        <div className={styles.timeIcon}>
                            <PiClockCountdownFill className={styles.clockIcon}/>
                            <div className={styles.time}>1h30min</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default function trendingRecipes() {
  return (
    <div className={styles.trendingRecipes}>
        <div className={styles.top}>
            <Image src={img} width={0} height={0} className={styles.image} alt='img'/>
            <div className={styles.container}>
                <div className={styles.recipe}>Tomato Recipes</div>
                <p className={styles.rating}>Make the most of tomato season with these 5 star recipes.</p>
            </div>
        </div>
        <div className={styles.bottom}>
            <Recipecontainer/>
            <Recipecontainer/>
            <Recipecontainer/>
            <Recipecontainer/>          
            <Recipecontainer/>
            <Recipecontainer/>
        </div>
    </div>
  )
}