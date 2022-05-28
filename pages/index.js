import styles from '../styles/Home.module.scss';
import { Fragment } from 'react';
import AboutMe from './about-me';
import Projects from './projects';
import ContactMe from './contact-me';
import { useRef, useEffect } from 'react';
import { useNavContext } from '../context/state';

// export const NavContext = createContext();

export default function Home() {
  const contactRef = useRef();
  const projectsRef = useRef();
  const allRefs = {projectsRef, contactRef};
  const { setNavRef } = useNavContext();
  useEffect(() => {
    if (Object.keys(allRefs).length === 0) {
      setNavRef(allRefs);
    }
  });

  return (
    <Fragment>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Hi, my name is Kang. I am a software engineer with a background in aerospace engineering. 🚀✈️
        </h1>
        {/* <button onClick={handleNavClick}>Contact Me</button> */}
      </div>
      <AboutMe />
      <Projects ref={projectsRef} />
      <ContactMe ref={contactRef} />
    </Fragment>
  )
}
