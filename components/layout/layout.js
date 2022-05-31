import Head from 'next/head'
import Footer from './footer';
import Header from './header';
// import Image from 'next/image';
import styles from './layout.module.scss';

function Layout(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kang Hsieh - Profile</title>
        <meta name="description" content="Kang's software dev profile and portfolio page" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </Head>
      <Header />
      <main className={styles.main}>{props.children}</main>
      {/* <div className={styles.img}>
        <Image
            src="/earth.jpg"
            alt="Earth"
            layout="fill"
            width="100%"
            height="20%"
          />
      </div> */}
      <Footer />
    </div>
  )
}

export default Layout;
