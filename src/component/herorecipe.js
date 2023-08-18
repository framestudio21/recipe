import Link from "next/link"
import Image from "next/image"

import { FaBeer } from 'react-icons/fa';

import style from "./styles/herorecipe.module.css"

export default function herorecipe() {
  return (
    <>
    <div className={style.herorecipe}>
        <div className={style.herorecipeTop}>
            <div className={style.herorecipeTitle}>Recipe</div>
            <div className={style.herorecipeSearch}>
                <input className={style.searchbox} type="search" placeholder="search your recipe"/>
            </div>
        </div>
        <div className={style.herorecipeBottom}>
            <div className={style.herorecipeBottomLeft}>
                <div className={style.recipeIconDiv}>
                    <div className={style.recipeIcon}></div>
                    <div className={style.recipeIconTitle}></div>
                </div>
            </div>
            <div className={style.herorecipeBottomMiddle}></div>
            <div className={style.herorecipeBottomRight}></div>
        </div>
    </div>
    </>
  )
}
