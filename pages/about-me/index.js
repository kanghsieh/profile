import styles from './index.module.scss';

function AboutMe() {
  return (
    <div className={styles.container}>
      <h1>Kang Hsieh</h1>
      <div>
        <div>
          <h2>About Me</h2>
          <p>Combined experience and knowledge in both aerospace engineering and software development. Having over 6 years of proven track record of successfully managed projects in technical operations of aerospace industry.</p>
          <p>Recent graduate of a software development coding bootcamp. Data-driven, structured and pragmatic approach to problem solving.</p>
        </div>
        <div>
          <h2>Download CV</h2>
        </div>
      </div>
      <div>
        <h2>Skills</h2>
        <div>
          <h3>Programming Languages</h3>
        </div>
        <div>
          <h3>Frameworks</h3>
        </div>
        <div>
          <h3>Backend</h3>
        </div>
        <div>
          <h3>Frontend</h3>
        </div>
        <div>
          <h3>Data</h3>
        </div>
        <div>
          <h3>Other</h3>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
