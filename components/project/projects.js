import ProjectItem from './project-item';
import styles from './projects.module.scss';
import { forwardRef } from 'react';
import devIcons from '../../devicons';

const Projects = forwardRef((props, ref) => {
  const icons = devIcons;
  return (
    <div className={styles.container} ref={ref} id={"projects"}>
      <h1 >My Projects</h1>
      <div className={styles.projects}>
        <ProjectItem
          title={"GymAlly"}
          img={"/gymally_screenshot.jpg"}
          url={"http://www.gymally.fitness/"}
          description={"This was the final project of the Le Wagon Web Dev Bootcamp developed by three students and me. It is showcasing the knowledge and skills obtained during this 10-week full-time coding bootcamp and was developed in just two weeks resulting in successfully demonstrating the MVP."}
          skills={[icons.ruby, icons.js, icons.rails, icons.postgresql]}
          repo={"https://github.com/if-stella/GymAlly"}
        />
        <ProjectItem
          title={"Help Local"}
          img={"/helplocal_screenshot.png"}
          url={"https://new-in-germany.vercel.app/"}
          description={"A full stack web application to connect refugees in need with volunteers for humanitarian aid, developed together with four other developers."}
          skills={[icons.nextjs, icons.react, icons.mongodb, icons.js]}
          repo={"https://github.com/gastighost/help-local"}
        />
      </div>
    </div>
  )
});
Projects.displayName = "Projects";

export default Projects;
