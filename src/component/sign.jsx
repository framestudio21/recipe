import Image from 'next/image'
import Link from 'next/link'
import img from '../image/food.jpg'
import styles from './styles/sign.module.css'

export default function sign(props) {
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
  return (
    <div className={styles.signForm}>
        <Image
            width={400}
            height={400}
            objectFit="cover"
            src={img}
            alt="img"
            className={styles.img}
        />
        <form className={styles.form} method='post' onSubmit={handleSubmit}>
            {/* <div className={styles.logo}>logo</div> */}
            <div className={styles.container}>
                <h2 className={styles.title}>{props.title}</h2>
            </div>
            {props.name && <div className={styles.container}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input className={styles.input} id='name' name='name' type='text' placeholder='Enter your email'/>
            </div>}
            <div className={styles.container}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input className={styles.input} id='email' name='email' type='text' placeholder='Enter your email'/>
            </div>
            <div className={styles.container}>
                <label htmlFor="password" className={styles.label}>Password</label>
                <input className={styles.input} id='password' type='password' placeholder='Enter your Password'/>
            </div>
            {props.repass && <div className={styles.container}>
                <label htmlFor="repassword" className={styles.label}>Password</label>
                <input className={styles.input} id='repassword' name='repassword' type='password' placeholder='Re-enter your password'/>
            </div>}
            {props.reset && <div className={styles.container}>
                <Link href='#' className={styles.resetPass}>Forgotten Password?</Link>
            </div>}
            <div className={styles.container}>
                <button type='submit' className={styles.btn}>{props.btn}</button>
            </div>
        </form>
    </div>
  )
}