import ProjectItem from './project-item';
import styles from './projects.module.scss';
import { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
  return (
    <div className={styles.container} ref={ref} id={"projects"}>
      <h1 >My Projects</h1>
      <div className={styles.projects}>
        <ProjectItem
          title={"GymAlly"}
          img={"/gymally_screenshot.png"}
          url={"http://www.gymally.fitness/"}
          description={"Here is the description"}
          skills={["Ruby", "JS"]}
        />
        <ProjectItem
          title={"Help Local"}
          img={"/helplocal_screenshot.png"}
          url={"https://new-in-germany.vercel.app/"}
          description={"Here is the description"}
          skills={["JS", "Next.js", "MongoDB"]}
        />
      </div>
    </div>
  )
});
Projects.displayName = "Projects";

export default Projects;
