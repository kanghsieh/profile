import styles from '../styles/Home.module.scss';
import { Fragment } from 'react';
import AboutMe from '../components/about-me/about-me';
import Projects from '../components/project/projects';
import ContactMe from '../components/contact/contact-me';
import { useRef, useEffect } from 'react';
import { useNavContext } from '../context/ref-state';

export default function Home() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const projectsRef = useRef();
  const allRefs = {homeRef, aboutRef, projectsRef, contactRef};
  const { navRef, setNavRef } = useNavContext();

  useEffect(() => {
    if (Object.entries(navRef).length === 0) {
      setNavRef(allRefs);
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      let activeRef;
      const entry = entries[0];
      // entries is an array containing all observed Refs
      // saving current visible Ref to activeRef:
      entry.isIntersecting && (activeRef = entry.target);
      // following line is executed when activeRef is defined and/or is updated:
      // activeRef && console.log('activeRef', activeRef.firstChild.textContent);
      // console.log(navRef);
    });

    observer.observe(homeRef.current);
    observer.observe(aboutRef.current);
    observer.observe(projectsRef.current);
    observer.observe(contactRef.current);
  }, []);

  return (
    <Fragment>
      <div className={styles.container}>
        <h1 className={styles.title} ref={homeRef}>
          Hi, my name is Kang. I am a software engineer with a background in aerospace engineering. 🚀✈️
        </h1>
      </div>
      <AboutMe ref={aboutRef} />
      <Projects ref={projectsRef} />
      <ContactMe ref={contactRef} />
    </Fragment>
  )
}
