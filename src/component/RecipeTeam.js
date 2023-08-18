import Link from "next/link";
import Image from 'next/image'
import { BsArrowUpRight } from 'react-icons/bs';

import img from '../image/food.jpg'

import styles from "./styles/recipeTeam.module.css";

export default function RecipeTeam() {
  return (
    <div className={styles.recipeTeam}>
      <div className={styles.left}>
        <h2 className={styles.heading}>The Simply Recipes Team</h2>
        <p className={styles.paragraph}>
          Simply Recipes is a trusted resource for home cooks with more than
          3,000 tested recipes, guides, and meal plans, drawing over 15 million
          readers each month from around the world. We’re supported by a group
          of recipe developers, food writers, recipe and product testers,
          photographers, and other creative professionals.
        </p>
        <div className={styles.btn}>
          <Link href="/blog">
            <button>more blog</button>
            <button className={styles.btnicon}>
              <BsArrowUpRight />
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.profile}>
          <Image
            width={100}
            height={100}
            objectFit="cover"
            src={img}
            alt="img"
          />
          <p>Name</p>
          <p>Position</p>
        </div>

        <div className={styles.profile}>
          <Image
            width={100}
            height={100}
            objectFit="cover"
            src={img}
            alt="img"
          />
          <p>Name</p>
          <p>Position</p>
        </div>

        <div className={styles.profile}>
          <Image
            width={100}
            height={100}
            objectFit="cover"
            src={img}
            alt="img"
          />
          <p>Name</p>
          <p>Position</p>
        </div>

        <div className={styles.profile}>
          <Image
            width={100}
            height={100}
            objectFit="cover"
            src={img}
            alt="img"
          />
          <p>Name</p>
          <p>Position</p>
        </div>

        <div className={styles.profile}>
          <Image
            width={100}
            height={100}
            objectFit="cover"
            src={img}
            alt="img"
          />
          <p>Name</p>
          <p>Position</p>
        </div>

        <div className={styles.profile}>
          <Image
            width={100}
            height={100}
            objectFit="cover"
            src={img}
            alt="img"
          />
          <p>Name</p>
          <p>Position</p>
        </div>
      </div>
    </div>
  );
}
