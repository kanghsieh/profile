import Link from "next/link";
import styles from './header.module.scss';

function Header() {
  return (
    <header>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link href="/about-me">
              <a>
                <div className={styles.navitem}>
                  <div className={styles.navtext}>
                    About Me
                  </div>
                  <img src="/mars.svg" alt="About Me" />
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
                  <img src="/jupiter.svg" alt="About Me" />
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact-me">
              <a>
                <div className={styles.navitem}>
                  <div className={styles.navtext}>
                    Contact Me
                  </div>
                  <img src="/moon.svg" alt="About Me" />
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
