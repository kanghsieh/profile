import styles from './footer.module.scss';
import Image from 'next/image'

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <p>Made with <i className="devicon-nextjs-original"></i></p>
        <p>|</p>
        <p>© 2022 Kang Hsieh</p>
        <p>|</p>
        <p>
          <a href="https://www.linkedin.com/in/kanghsieh/">
            <i className="devicon-linkedin-plain"></i>
          </a>
        </p>
        <p>
          <a href="https://github.com/kanghsieh">
            <i className="devicon-github-original"></i>
          </a>
        </p>
        <p></p>
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
