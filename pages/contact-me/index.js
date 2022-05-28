import styles from './index.module.scss';
import { forwardRef } from 'react';

const ContactMe = forwardRef((props, ref) => {
  return (
    <div className={styles.container}>
      <h1 ref={ref}>Contact Me</h1>
    </div>
  )
});
ContactMe.displayName = "ContactMe";

export default ContactMe;
