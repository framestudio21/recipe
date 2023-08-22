import Link from 'next/link'
import Image from 'next/image'
import img from "../image/food.jpg"
import foodlogo from "../image/line-fruit.svg"
import { TbMathGreater } from 'react-icons/tb'
import { BiSolidUser } from 'react-icons/bi'
import { PiClockCountdownFill } from 'react-icons/pi'

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
            <div className={styles.headerimg}>
                <Image src={foodlogo} width={0} height={0} alt='food' className={styles.foodimg}/>
            </div>
            {/* <div className={styles.heading}>A plateful of veggies 
            <BsArrowRightShort className={styles.icon}/>
            </div> */}
            <div className={styles.items}>

            <Link href="#">
                <div className={styles.recipecard}>
                <div className={styles.cardimg}>
                <Image
                    width={0}
                    height={0}
                    objectFit="cover"
                    src={img}
                    alt="img"
                    className={styles.image}
                />
                </div>
                <div className={styles.cardmatter}>
                <div className={styles.cardtag}>dinner</div>
                <div className={styles.cardname}>cuban ropa vieja</div>
                <div className={styles.cardbar}></div>
                <div className={styles.carddetail}>
                <div className={styles.cardperson}>
                    <div className={styles.serving}>serving</div>
                    <div className={styles.personicon}><BiSolidUser/><BiSolidUser/><BiSolidUser/></div>
                </div>
                <div className={styles.carddetailbar}></div>
                <div className={styles.cardtime}>
                    <div className={styles.cooktime}>cook time</div>
                    <div className={styles.time}>
                    1h30min
                    </div>
                </div>
                </div>
                </div>
            </div>
            </Link>

            <Link href="#">
                <div className={styles.recipecard}>
                <div className={styles.cardimg}>
                <Image
                    width={0}
                    height={0}
                    objectFit="cover"
                    src={img}
                    alt="img"
                    className={styles.image}
                />
                </div>
                <div className={styles.cardmatter}>
                <div className={styles.cardtag}>dinner</div>
                <div className={styles.cardname}>cuban ropa vieja</div>
                <div className={styles.cardbar}></div>
                <div className={styles.carddetail}>
                <div className={styles.cardperson}>
                    <div className={styles.serving}>serving</div>
                    <div className={styles.personicon}><BiSolidUser/><BiSolidUser/><BiSolidUser/></div>
                </div>
                <div className={styles.carddetailbar}></div>
                <div className={styles.cardtime}>
                    <div className={styles.cooktime}>cook time</div>
                    <div className={styles.time}>
                    1h30min
                    </div>
                </div>
                </div>
                </div>
            </div>
            </Link>
 
            <Link href="#">
                <div className={styles.recipecard}>
                <div className={styles.cardimg}>
                <Image
                    width={0}
                    height={0}
                    objectFit="cover"
                    src={img}
                    alt="img"
                    className={styles.image}
                />
                </div>
                <div className={styles.cardmatter}>
                <div className={styles.cardtag}>dinner</div>
                <div className={styles.cardname}>cuban ropa vieja</div>
                <div className={styles.cardbar}></div>
                <div className={styles.carddetail}>
                <div className={styles.cardperson}>
                    <div className={styles.serving}>serving</div>
                    <div className={styles.personicon}><BiSolidUser/><BiSolidUser/><BiSolidUser/></div>
                </div>
                <div className={styles.carddetailbar}></div>
                <div className={styles.cardtime}>
                    <div className={styles.cooktime}>cook time</div>
                    <div className={styles.time}>
                    1h30min
                    </div>
                </div>
                </div>
                </div>
            </div>
            </Link>
 
            <Link href="#">
                <div className={styles.recipecard}>
                <div className={styles.cardimg}>
                <Image
                    width={0}
                    height={0}
                    objectFit="cover"
                    src={img}
                    alt="img"
                    className={styles.image}
                />
                </div>
                <div className={styles.cardmatter}>
                <div className={styles.cardtag}>dinner</div>
                <div className={styles.cardname}>cuban ropa vieja</div>
                <div className={styles.cardbar}></div>
                <div className={styles.carddetail}>
                <div className={styles.cardperson}>
                    <div className={styles.serving}>serving</div>
                    <div className={styles.personicon}><BiSolidUser/><BiSolidUser/><BiSolidUser/></div>
                </div>
                <div className={styles.carddetailbar}></div>
                <div className={styles.cardtime}>
                    <div className={styles.cooktime}>cook time</div>
                    <div className={styles.time}>
                    1h30min
                    </div>
                </div>
                </div>
                </div>
            </div>
            </Link>
 
            <Link href="#">
                <div className={styles.recipecard}>
                <div className={styles.cardimg}>
                <Image
                    width={0}
                    height={0}
                    objectFit="cover"
                    src={img}
                    alt="img"
                    className={styles.image}
                />
                </div>
                <div className={styles.cardmatter}>
                <div className={styles.cardtag}>dinner</div>
                <div className={styles.cardname}>cuban ropa vieja</div>
                <div className={styles.cardbar}></div>
                <div className={styles.carddetail}>
                <div className={styles.cardperson}>
                    <div className={styles.serving}>serving</div>
                    <div className={styles.personicon}><BiSolidUser/><BiSolidUser/><BiSolidUser/></div>
                </div>
                <div className={styles.carddetailbar}></div>
                <div className={styles.cardtime}>
                    <div className={styles.cooktime}>cook time</div>
                    <div className={styles.time}>
                    1h30min
                    </div>
                </div>
                </div>
                </div>
            </div>
            </Link>
 
            <Link href="#">
                <div className={styles.recipecard}>
                <div className={styles.cardimg}>
                <Image
                    width={0}
                    height={0}
                    objectFit="cover"
                    src={img}
                    alt="img"
                    className={styles.image}
                />
                </div>
                <div className={styles.cardmatter}>
                <div className={styles.cardtag}>dinner</div>
                <div className={styles.cardname}>cuban ropa vieja</div>
                <div className={styles.cardbar}></div>
                <div className={styles.carddetail}>
                <div className={styles.cardperson}>
                    <div className={styles.serving}>serving</div>
                    <div className={styles.personicon}><BiSolidUser/><BiSolidUser/><BiSolidUser/></div>
                </div>
                <div className={styles.carddetailbar}></div>
                <div className={styles.cardtime}>
                    <div className={styles.cooktime}>cook time</div>
                    <div className={styles.time}>
                    1h30min
                    </div>
                </div>
                </div>
                </div>
            </div>
            </Link>
             
            </div>
        </div>
    </div>
    </>
  )
}
