import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import Navbar from '../component/navbar'
import styles from '../styles/id.module.css'
import img from '../image/food.jpg'

export default dynamic(() => Promise.resolve(Id), { ssr: false });
function Id() {
  return (
    <>
    {/* <Navbar/> */}
    <div className={styles.itempage}>
        <h1 className={styles.recipe}>Recipe Name</h1>
        <div className={styles.top}>
            <div className={styles.images}>
                <Image
                    width={200}
                    height={200}
                    objectFit="cover"
                    src={img}
                    alt="img"
                    className={styles.img}
                />
                <Image
                    width={200}
                    height={200}
                    objectFit="cover"
                    src={img}
                    alt="img"
                    className={styles.img}
                />
                <Image
                    width={200}
                    height={200}
                    objectFit="cover"
                    src={img}
                    alt="img"
                    className={styles.img}
                />
            </div>
            <div className={styles.process}>
                <h2 className={styles.heading}>Process</h2>
            </div>
            <div className={styles.tips}>
                <h2 className={styles.heading}>Tips</h2>
            </div>
        </div>
        <div className={styles.bottom}>
            <div className={styles.reviews}>
                <div className={styles.review}>
                    <div className={styles.profile}>
                        <Image
                            width={50}
                            height={50}
                            objectFit="cover"
                            src={img}
                            alt="img"
                            className={styles.img}
                        />
                        <span>Name</span>
                    </div>
                    <div className={styles.rattinganddate}>
                        <div className={styles.ratting}></div>
                        <div className={styles.date}></div>
                    </div>
                    <div className={styles.reviewtext}></div>
                    <div className={styles.helpful}>Helpful (1)</div>
                </div>
            </div>
            <div className={styles.statistic}>10 ratings</div>
        </div>
    </div>
    </>
  )
}