import styles from './contact-me.module.scss';
import { forwardRef } from 'react';

const ContactMe = forwardRef((props, ref) => {
  return (
    <div className={styles.container} ref={ref} id={"contact"}>
      <h1 >Contact Me</h1>
      <div className={styles.form}>
        <form action="" method="post">
          <label htmlFor="first">First name:</label>
          <input type="text" id="first" name="first" required />
          <label htmlFor="last">Last name:</label>
          <input type="text" id="last" name="last" />
          <label htmlFor="last">Your email:</label>
          <input type="text" id="email" name="email" required />
          <label htmlFor="last">Your message:</label>
          <textarea row={4} id="message" name="message" required minLength="10" maxLength="1000"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
});
ContactMe.displayName = "ContactMe";

export default ContactMe;
