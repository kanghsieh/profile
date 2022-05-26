import styles from './footer.module.scss';
import Image from 'next/image'

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
        <Image
          src="/earth.jpg"
          alt="Earth"
          className={styles.img}
          layout="fill"
          width="100%"
          height="20%"
           />
      </div>
    </footer>
  )
}

export default Footer;
