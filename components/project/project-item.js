import Link from "next/link";
import styles from "./project.module.scss";

function ProjectItem(props) {
  const { title, img, url, description, skills } = props;
  console.log(skills);
  return (
    <Link href={url}>
      <a target="_blank" rel="noreferrer">
        <div className={styles.container}>
          <div className={styles.image}>
            {/* <Image
              src={img}
              alt={title}
              // className={styles.img}
              width="100%"
              height="100%"
            /> */}
            <img src={img} alt={title} />
          </div>
          <div className={styles.description}>
            <h2>{title}</h2>
            <p>{description}</p>
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
      </a>
    </Link>
  )
}

export default ProjectItem;
