import Link from "next/link";
import styles from './header.module.scss';

function Header(props) {
  return (
    <header>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link href="/about-me">About Me</Link>
          </li>
          <li>
            <Link href="/projects">My Projects</Link>
          </li>
          <li>
            <Link href="/contact-me">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
