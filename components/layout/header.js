import Link from "next/link";
import Image from "next/image";
import styles from './header.module.scss';
import { useNavContext } from "../../context/ref-state";
import { useScrollContext } from "../../context/scroll-state";
// import { useEffect } from "react";
import { useRef } from "react";

function Header() {
  const allRefs = useNavContext();
  const { navRef: { homeRef, aboutRef, projectsRef, contactRef }} = allRefs;

  const activeRef = useScrollContext();
  const homeNav = useRef();
  const aboutNav = useRef();
  const projectsNav = useRef();
  const contactNav = useRef();

  const scrollTo = (navElement) => {
    navElement.current.scrollIntoView({ behavior: 'smooth' });
  }

  // useEffect(() => {
  //   console.log('header activeRef', activeRef.scrollRef.id);
  // }, [activeRef])

  return (
    <header>
      <nav>
        <ul className={styles.list}>
        <li>
          <div className={styles.navitem} onClick={() => scrollTo(homeRef)} ref={homeNav}>
            <div className={styles.navtext}>
              Home
            </div>
            {/* <img src="/home.svg" alt="Home" /> */}
            <Image
              src="/home.png"
              alt="Home"
              quality={10}
              priority={true}
              height={100}
              width={100} />
          </div>
          </li>
          <li>
            <div className={styles.navitem} onClick={() => scrollTo(aboutRef)} ref={aboutNav}>
              <div className={styles.navtext}>
                About Me
              </div>
              <Image
                src="/mars.png"
                alt="About Me"
                height={100}
                width={100} />
            </div>
          </li>
          <li>
            <div className={styles.navitem} onClick={() => scrollTo(projectsRef)} ref={projectsNav}>
              <div className={styles.navtext}>
                My Projects
              </div>
              <Image
                src="/jupiter.png"
                alt="My Projects"
                height={100}
                width={100} />
            </div>
          </li>
          <li>
            <div className={styles.navitem} onClick={() => scrollTo(contactRef)} ref={contactNav}>
              <div className={styles.navtext}>
                Contact Me
              </div>
              <Image
                src="/moon.png"
                alt="Contact Me"
                height={100}
                width={100} />
            </div>
            {/* <div className={(activeRef.scrollRef.id == "contact") ? styles.navitemScrolled : styles.navitem} onClick={() => scrollTo(contactRef)} ref={contactNav}>
              <div className={styles.navtext}>
                Contact Me
              </div>
              <Image
                src="/moon.svg"
                alt="Contact Me"
                height={100}
                width={100} />
            </div> */}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
