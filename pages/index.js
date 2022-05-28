import styles from '../styles/Home.module.scss';
import { Fragment } from 'react';
import AboutMe from './about-me';
import Projects from './projects';
import ContactMe from './contact-me';
import { useRef } from 'react';

export default function Home() {
  const contactRef = useRef();
  const handleNavClick = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Fragment>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Hi, my name is Kang. I am a software engineer with a background in aerospace engineering. 🚀✈️
        </h1>
        <button onClick={handleNavClick}>Contact Me</button>
      </div>
      <AboutMe />
      <Projects />
      <ContactMe ref={contactRef} />
    </Fragment>
  )
}
