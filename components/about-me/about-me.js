import styles from './about-me.module.scss';
import Image from 'next/image';
import { forwardRef } from 'react';

const AboutMe = forwardRef((props, ref) => {
  return (
    <div className={styles.container} ref={ref} id={"about"}>
      <h1 >Skills</h1>
      <div className={styles.skills}>
        <div>
          <h3>Programming Languages</h3>
          <div className={styles.skillsCard}>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-ruby-plain-wordmark"></i>
            <i className="devicon-python-plain-wordmark"></i>
          </div>
        </div>
        <div>
          <h3>Frameworks</h3>
          <div className={styles.skillsCard}>
            <i className="devicon-nextjs-original-wordmark colored"></i>
            <i className="devicon-react-original-wordmark"></i>
            <i className="devicon-rails-plain-wordmark"></i>
          </div>
        </div>
        <div>
          <h3>Backend</h3>
          <div className={styles.skillsCard}>
            <i className="devicon-nodejs-plain-wordmark"></i>
            <i className="devicon-postgresql-plain-wordmark"></i>
            <i className="devicon-sqlite-plain-wordmark"></i>
            <i className="devicon-mongodb-plain-wordmark"></i>
          </div>
        </div>
        <div>
          <h3>Frontend</h3>
          <div className={styles.skillsCard}>
            <i className="devicon-html5-plain-wordmark"></i>
            <i className="devicon-css3-plain-wordmark"></i>
            <i className="devicon-bootstrap-plain-wordmark"></i>
          </div>
        </div>
        <div>
          <h3>DevOps</h3>
          <div className={styles.skillsCard}>
            <i className="devicon-git-plain-wordmark"></i>
            <i className="devicon-github-original-wordmark"></i>
            <i className="devicon-heroku-original-wordmark"></i>
          </div>
        </div>
        <div>
          <h3>Testing</h3>
          <div className={styles.skillsCard}>
            <i className="devicon-jest-plain"></i>
            <i className="devicon-rspec-original-wordmark"></i>
          </div>
        </div>
        <div>
          <h3>Other</h3>
          <div className={styles.skillsCard}>
            <i className="devicon-apple-original"></i>
            <i className="devicon-matlab-plain"></i>
            <i className="devicon-latex-original"></i>
            {/* Tableau Icon */}
          </div>
        </div>
      </div>
      <h1>Kang Hsieh</h1>
      <div className={styles.bio}>
        <div className={styles.profile}>
          <h2>About Me</h2>
          <p>Combined experience and knowledge in both aerospace engineering and software development. Having over 6 years of proven track record of successfully managed projects in technical operations of aerospace industry.</p>
          <p>Recent graduate of a software development coding bootcamp. Data-driven, structured and pragmatic approach to problem solving.</p>
        </div>
        {/* <div className={styles.cv}>
          <a href="KangHsieh_CV_2022.pdf" target="_blank">
            <h2>Download CV</h2>
            <Image layout={"responsive"} height={1.4} width={1} src={"/cv_preview.png"} alt={"CV preview photo"}/>
          </a>
        </div> */}
      </div>
    </div>
  )
});
AboutMe.displayName = "AboutMe";

export default AboutMe;
