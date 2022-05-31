import styles from './home.module.scss';
import Image from 'next/image';
import { forwardRef } from 'react';

const HomeTitle = forwardRef((props, ref) => {
  return (
    <div className={styles.container} ref={ref} id={"home"}>
      <Image src={"/avatar.jpg"} layout={"fixed"} width={100} height={100} alt={"Avatar"} className={styles.avatar} />
      <h1 className={styles.title} >
        Hi, my name is Kang. I am a software engineer with a background in aerospace engineering. 🚀✈️
      </h1>
    </div>
  )
});
HomeTitle.displayName = "HomeTitle";

export default HomeTitle;
