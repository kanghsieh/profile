import Link from "next/link";
import styles from "./project.module.scss";

function ProjectItem(props) {
  const { title, img, url, description, skills, repo } = props;
  return (
    <div className={styles.container}>
      <img src={img} alt={title} />
      <div className={styles.description}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={url}>
          <a target="_blank" rel="noreferrer">
            Go to app
          </a>
        </Link>
        <Link href={repo}>
          <a target="_blank" rel="noreferrer">
            Go to code
          </a>
        </Link>
        <h3>Applied tech stack:</h3>
        <div className={styles.skillsCard}>
          {skills.map(skill => {
            return (
              <i key={skill} className={skill}></i>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectItem;
