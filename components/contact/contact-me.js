import styles from './contact-me.module.scss';
import { forwardRef } from 'react';

const ContactMe = forwardRef((props, ref) => {
  return (
    <div className={styles.container} ref={ref} id={"contact"}>
      <h1 >Contact Me</h1>
      <div className={styles.form}>
        <form action="" method="post">
          <div className={styles.formGroup}>
            <label htmlFor="first">First name:</label>
            <input type="text" id="first" name="first" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="last">Last name:</label>
            <input type="text" id="last" name="last" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="last">Your email:</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="last">Your message:</label>
            <textarea row={4} id="message" name="message" required minLength="10" maxLength="1000"/>
          </div>
          <div className={styles.formGroup}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
});
ContactMe.displayName = "ContactMe";

export default ContactMe;
