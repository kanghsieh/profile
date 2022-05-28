import Link from "next/link";
import Image from "next/image";
import styles from './header.module.scss';
import { useNavContext } from "../../context/state";

function Header() {
  const allRefs = useNavContext();
  const { navRef: { homeRef, aboutRef, projectsRef, contactRef }} = allRefs;

  const scrollTo = (navElement) => {
    navElement.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <header>
      <nav>
        <ul className={styles.list}>
        <li>
          <div className={styles.navitem} onClick={() => scrollTo(homeRef)}>
            <div className={styles.navtext}>
              Home
            </div>
            {/* <img src="/home.svg" alt="Home" /> */}
            <Image
              src="/home.svg"
              alt="Home"
              height={100}
              width={100} />
          </div>
          </li>
          <li>
            <div className={styles.navitem} onClick={() => scrollTo(aboutRef)}>
              <div className={styles.navtext}>
                About Me
              </div>
              <Image
                src="/mars.svg"
                alt="About Me"
                height={100}
                width={100} />
            </div>
          </li>
          <li>
            <div className={styles.navitem} onClick={() => scrollTo(projectsRef)}>
              <div className={styles.navtext}>
                My Projects
              </div>
              <Image
                src="/jupiter.svg"
                alt="My Projects"
                height={100}
                width={100} />
            </div>
          </li>
          <li>
            <div className={styles.navitem} onClick={() => scrollTo(contactRef)}>
              <div className={styles.navtext}>
                Contact Me
              </div>
              <Image
                src="/moon.svg"
                alt="Contact Me"
                height={100}
                width={100} />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
