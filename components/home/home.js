import styles from './home.module.scss';
import { forwardRef } from 'react';

const HomeTitle = forwardRef((props, ref) => {
  return (
    <div className={styles.container} ref={ref} id={"home"}>
      <h1 className={styles.title} >
        Hi, my name is Kang. I am a software engineer with a background in aerospace engineering. 🚀✈️
      </h1>
    </div>
  )
});
HomeTitle.displayName = "HomeTitle";

export default HomeTitle;
