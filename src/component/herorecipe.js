import Link from "next/link"
import Image from "next/image"

import { FaCocktail, FaGlassMartiniAlt } from 'react-icons/fa';
import { SiCakephp } from 'react-icons/si';
import { BiSolidUser } from 'react-icons/bi';
import { GiChickenOven, GiFullPizza, GiCupcake, GiNoodles } from 'react-icons/gi';

import style from "./styles/herorecipe.module.css"

import img from "../image/img1.jpg"

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
                    <div className={style.recipeIcon}>
                            <FaCocktail className={style.iconBody}/>
                    </div>
                    <div className={style.recipeIconTitle}>Cocktail</div>
                </div>

                <div className={style.recipeIconDiv}>
                    <div className={style.recipeIcon}>
                            <FaGlassMartiniAlt className={style.iconBody}/>
                    </div>
                    <div className={style.recipeIconTitle}>mocktail</div>
                </div>

                <div className={style.recipeIconDiv}>
                    <div className={style.recipeIcon}>
                            <GiChickenOven className={style.iconBody}/>
                    </div>
                    <div className={style.recipeIconTitle}>Chicken</div>
                </div>

                <div className={style.recipeIconDiv}>
                    <div className={style.recipeIcon}>
                            <GiFullPizza className={style.iconBody}/>
                    </div>
                    <div className={style.recipeIconTitle}>Pizza</div>
                </div>

                <div className={style.recipeIconDiv}>
                    <div className={style.recipeIcon}>
                            <GiCupcake className={style.iconBody}/>
                    </div>
                    <div className={style.recipeIconTitle}>Dessert</div>
                </div>

                <div className={style.recipeIconDiv}>
                    <div className={style.recipeIcon}>
                            <SiCakephp className={style.iconBody}/>
                    </div>
                    <div className={style.recipeIconTitle}>Cake</div>
                </div>

                <div className={style.recipeIconDiv}>
                    <div className={style.recipeIcon}>
                            <GiNoodles className={style.iconBody}/>
                    </div>
                    <div className={style.recipeIconTitle}>Noodles</div>
                </div>

            </div>

            <div className={style.herorecipeBottomMiddle}>
                <Image width={0} height={0} className={style.image} src={img}/>
            </div>

            <div className={style.herorecipeBottomRight}>

                <div className={style.recipeDetailDiv}>
                    <div className={style.recipeDetailDivTop}>
                        Russian Salad
                    </div>
                    <div className={style.recipeDetailDivMiddle}></div>
                    <div className={style.recipeDetailDivBottom}>
                        <div className={style.recipeDetailDivBottomLeft}>
                            <div className={style.recipeDetailDivBottomLeftTitle}>serving</div>
                            <div className={style.recipeDetailDivBottomLeftIcon}>
                                <BiSolidUser className={style.icon}/>
                                <BiSolidUser className={style.icon}/>
                            </div>
                        </div>
                        <div className={style.recipeDetailDivBottomMiddle}></div>
                        <div className={style.recipeDetailDivBottomRight}>
                            <div className={style.recipeDetailDivBottomRightTop}>
                                cook time
                            </div>
                            <div className={style.recipeDetailDivBottomRightBottom}>
                                1h30min
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.recipeDetailDiv}>
                    <div className={style.recipeDetailDivTop}>
                        Russian Salad
                    </div>
                    <div className={style.recipeDetailDivMiddle}></div>
                    <div className={style.recipeDetailDivBottom}>
                        <div className={style.recipeDetailDivBottomLeft}>
                            <div className={style.recipeDetailDivBottomLeftTitle}>serving</div>
                            <div className={style.recipeDetailDivBottomLeftIcon}>
                                <BiSolidUser className={style.icon}/>
                                <BiSolidUser className={style.icon}/>
                            </div>
                        </div>
                        <div className={style.recipeDetailDivBottomMiddle}></div>
                        <div className={style.recipeDetailDivBottomRight}>
                            <div className={style.recipeDetailDivBottomRightTop}>
                                cook time
                            </div>
                            <div className={style.recipeDetailDivBottomRightBottom}>
                                1h30min
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={style.recipeDetailDiv}>
                    <div className={style.recipeDetailDivTop}>
                        Russian Salad
                    </div>
                    <div className={style.recipeDetailDivMiddle}></div>
                    <div className={style.recipeDetailDivBottom}>
                        <div className={style.recipeDetailDivBottomLeft}>
                            <div className={style.recipeDetailDivBottomLeftTitle}>serving</div>
                            <div className={style.recipeDetailDivBottomLeftIcon}>
                                <BiSolidUser className={style.icon}/>
                                <BiSolidUser className={style.icon}/>
                            </div>
                        </div>
                        <div className={style.recipeDetailDivBottomMiddle}></div>
                        <div className={style.recipeDetailDivBottomRight}>
                            <div className={style.recipeDetailDivBottomRightTop}>
                                cook time
                            </div>
                            <div className={style.recipeDetailDivBottomRightBottom}>
                                1h30min
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={style.recipeDetailDiv}>
                    <div className={style.recipeDetailDivTop}>
                        Russian Salad
                    </div>
                    <div className={style.recipeDetailDivMiddle}></div>
                    <div className={style.recipeDetailDivBottom}>
                        <div className={style.recipeDetailDivBottomLeft}>
                            <div className={style.recipeDetailDivBottomLeftTitle}>serving</div>
                            <div className={style.recipeDetailDivBottomLeftIcon}>
                                <BiSolidUser className={style.icon}/>
                                <BiSolidUser className={style.icon}/>
                            </div>
                        </div>
                        <div className={style.recipeDetailDivBottomMiddle}></div>
                        <div className={style.recipeDetailDivBottomRight}>
                            <div className={style.recipeDetailDivBottomRightTop}>
                                cook time
                            </div>
                            <div className={style.recipeDetailDivBottomRightBottom}>
                                1h30min
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={style.recipeDetailDiv}>
                    <div className={style.recipeDetailDivTop}>
                        Russian Salad
                    </div>
                    <div className={style.recipeDetailDivMiddle}></div>
                    <div className={style.recipeDetailDivBottom}>
                        <div className={style.recipeDetailDivBottomLeft}>
                            <div className={style.recipeDetailDivBottomLeftTitle}>serving</div>
                            <div className={style.recipeDetailDivBottomLeftIcon}>
                                <BiSolidUser className={style.icon}/>
                                <BiSolidUser className={style.icon}/>
                            </div>
                        </div>
                        <div className={style.recipeDetailDivBottomMiddle}></div>
                        <div className={style.recipeDetailDivBottomRight}>
                            <div className={style.recipeDetailDivBottomRightTop}>
                                cook time
                            </div>
                            <div className={style.recipeDetailDivBottomRightBottom}>
                                1h30min
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}
