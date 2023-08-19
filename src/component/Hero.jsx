import Link from 'next/link'
import Image from 'next/image'
import img from "../image/food.jpg"
import { TbMathGreater } from 'react-icons/tb'
import { BsArrowRightShort } from 'react-icons/bs'

import styles from './styles/hero.module.css'

export default function Hero() {
  return (
    <>
    <div className={styles.hero}>
        <div className={styles.left}>
            <div className={styles.outter}>
                <div className={styles.title}>side dishes</div>
                <div className={styles.inner}>
                    <h2 className={styles.ingredients}>
                        zucchini, eggplant, tomato gratin
                    </h2>
                    <p className={styles.paragraph}>kjcwcbwc bcwbwkcc whefw hf cewh coeqwhd febwfoewh fo f2ebffg fgef wg f egfgoef g efgfofoFC</p>
                    <Link href="#" className={styles.button}>get the recipe <TbMathGreater className={styles.icon}/></Link> 
                </div>
            </div>
        </div>

        <div className={styles.right}>
            <div className={styles.heading}>A plateful of veggies 
            {/* <BsArrowRightShort className={styles.icon}/> */}
            </div>
            <div className={styles.items}>

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
    </div>
    </>
  )
}
