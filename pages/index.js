import styles from '../styles/Home.module.scss';
import { Fragment } from 'react';
import AboutMe from '../components/about-me/about-me';
import Projects from '../components/project/projects';
import ContactMe from '../components/contact/contact-me';
import HomeTitle from '../components/home/home';
import { useRef, useEffect } from 'react';
import { useNavContext } from '../context/ref-state';
import { useScrollContext } from '../context/scroll-state';

export default function Home(props) {
  const homeRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const projectsRef = useRef();
  const allRefs = {homeRef, aboutRef, projectsRef, contactRef};

  const { navRef, setNavRef } = useNavContext();
  const { scrollRef, setScrollRef } = useScrollContext();

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
      entry.isIntersecting && (activeRef = entry.target) && setScrollRef(activeRef);
      // following line is executed when activeRef is defined and/or is updated:
      // activeRef && setScrollRef(activeRef);
      // console.log(activeRef)
    });

    observer.observe(homeRef.current);
    observer.observe(aboutRef.current);
    observer.observe(projectsRef.current);
    observer.observe(contactRef.current);
  }, [scrollRef]);

  return (
    <Fragment>
      <HomeTitle ref={homeRef}/>
      <AboutMe ref={aboutRef} />
      <Projects ref={projectsRef} />
      <ContactMe ref={contactRef}
        serviceId={props.service_id}
        templateId={props.template_id}
        publicKey={props.public_key} />
    </Fragment>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
      public_key: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    }
  }
}
