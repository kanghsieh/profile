import Project from '../../components/project/project';
import styles from './index.module.scss';

function Projects() {
  return (
    <div className={styles.container}>
      <h1>My Projects</h1>
      <div className={styles.projects}>
        <Project
          title={"GymAlly"}
          img={"/gymally_screenshot.png"}
          url={"http://www.gymally.fitness/"}
          description={"Here is the description"}
        />
        <Project
          title={"Help Local"}
          img={"/helplocal_screenshot.png"}
          url={"https://new-in-germany.vercel.app/"}
          description={"Here is the description"}
        />
      </div>
    </div>
  )
}

export default Projects;
