import styles from "./styles/footer.module.css"

import Image from "next/image"
import Link from "next/link"
import { GrFacebook, GrYoutube } from 'react-icons/gr';
import { ImInstagram } from 'react-icons/im';
import { FaPinterestSquare, FaTwitterSquare } from 'react-icons/fa';
import { BsArrowUpRight } from 'react-icons/bs';

import bottomImage from "../image/bottomvegetable.svg"
import backgroundImage from "../image/bgvegetable.svg"

export default function footer() {
  return (
    <>
    <div className={styles.footer}>
    <div className={styles.footerbody}>
        <div className={styles.footerlink}>
            <div className={styles.leftFooterLinkDiv}>
                {/* <div className={styles.logo}>recipedairy.in</div> */}
                <div className={styles.newsletter}>
                    {/* <div className={styles.newsletterheader}>Ready to Cook with us ?</div> */}
                    <div className={styles.newsletterheader}>Want to get notified of our latest recipes ?</div>
                    <div className={styles.newsletterparagraph}>Sign up for our weekly newsletters!</div>
                    <div className={styles.newsletteremail}>
                        <input type="email" placeholder="enter your email" className={styles.email} />
                        <button className={styles.emailbtn}>sign up</button>
                    </div>
                </div>
                <div className={styles.socialIconsDiv}>
                    <div className={styles.socialIconsTitle}>Let be Follow Us On : </div>
                    <div className={styles.socialIcons}>
                    <Link href="#" className={styles.iconLink}><GrFacebook className={styles.icon}/></Link>
                    <Link href="#" className={styles.iconLink}><GrYoutube className={styles.icon}/></Link>
                    <Link href="#" className={styles.iconLink}><ImInstagram className={styles.icon}/></Link>
                    <Link href="#" className={styles.iconLink}><FaPinterestSquare className={styles.icon}/></Link>
                    <Link href="#" className={styles.iconLink}><FaTwitterSquare className={styles.icon}/></Link>
                    </div>
                </div>
            </div>
            <div className={styles.rightFooterLinkDiv}>
                {/* <div className={styles.rightFooterTop}>
                    <input type="search" placeholder="search your recipes"/>
                </div> */}
                <div className={styles.rightFooterBottom}>
                    <div className={styles.rightFooterBottomColum1}>
                        <Link href="/home">home</Link>
                        <Link href="/blog">blog</Link>
                        <Link href="/gallery">gallery</Link>
                        <Link href="/recipedairy">recipedairy</Link>
                        <Link href="/cuisine">CUISINES</Link>
                        <Link href="/kitchentips">kitchen tips</Link>
                    </div>
                    <div className={styles.rightFooterBottomColum2}>
                    <Link href="/about">about us</Link>
                    <Link href="/terms">terms & services</Link>
                    <Link href="/policy">privecy policy</Link>
                    <Link href="/guildlines">editorial guildlines</Link>
                    <Link href="/contact">contact us</Link>
                    <Link href="/advertisement">advertisement</Link>
                    </div>
                </div>
            </div>
        </div>
    <div className={styles.footerimage}>
    <Image className={styles.image} width={0} height={0} src={bottomImage}/>
    </div>
    </div>
    </div>
    </>
  )
}
