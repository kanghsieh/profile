import styles from './footer.module.scss';
import Image from 'next/image'

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <p>Made with <i className="devicon-nextjs-original"></i>  |  © 2022 Kang Hsieh</p>

        {/* <Image
          src="/earth.jpg"
          alt="Earth"
          className={styles.img}
          layout="fill"
          width="100%"
          height="20%"
        /> */}
      </div>
    </footer>
  )
}

export default Footer;
