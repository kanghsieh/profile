import Image from "next/image";
import Link from "next/link";
import styles from "./project.module.scss";

function Project(props) {
  const { title, img, url, description, skills } = props;
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
            <ul>
              {skills.map(skill => {
                return (
                  <div key={skill}>{skill}</div>
                )
              })}
            </ul>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Project;
