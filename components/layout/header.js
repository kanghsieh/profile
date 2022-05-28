import Link from "next/link";
import Image from "next/image";
import styles from './header.module.scss';
import { useNavContext } from "../../context/state";

function Header() {
  const allRefs = useNavContext();

  const handleNavClick = () => {
    console.log(allRefs.navRef.projectsRef);
    // navRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <header>
      <nav>
        <ul className={styles.list}>
        <li>
            <Link href="/">
              <a>
                <div className={styles.navitem}>
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
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about-me">
              <a>
                <div className={styles.navitem}>
                  <div className={styles.navtext}>
                    About Me
                  </div>
                  <Image
                    src="/mars.svg"
                    alt="About Me"
                    height={100}
                    width={100} />
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
            <a>
                <div className={styles.navitem}>
                  <div className={styles.navtext}>
                    My Projects
                  </div>
                  <Image
                    src="/jupiter.svg"
                    alt="My Projects"
                    height={100}
                    width={100} />
                </div>
              </a>
            </Link>
          </li>
          <button onClick={handleNavClick}>Contact Me</button>
          <li>
            <Link href="/contact-me">
              <a>
                <div className={styles.navitem}>
                  <div className={styles.navtext}>
                    Contact Me
                  </div>
                  <Image
                    src="/moon.svg"
                    alt="Contact Me"
                    height={100}
                    width={100} />
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
