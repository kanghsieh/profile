import styles from './contact-me.module.scss';
import { forwardRef, useState } from 'react';
import { send } from 'emailjs-com';

const ContactMe = forwardRef((props, ref) => {
  const { serviceId, templateId, publicKey } = props;
  const [toSend, setToSend] = useState({
    first: '',
    last: '',
    email: '',
    message: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    {/* --- METHOD TO SEND THE MAIL --- */}
    send(
      serviceId,
      templateId,
      toSend,
      publicKey,
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Message has been sent out successfully.");
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert("Sending message failed.");
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container} ref={ref} id={"contact"}>
      <h1 >Contact Me</h1>
      <div className={styles.form}>
        <form action="" method="post" onSubmit={onSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="first">First name:</label>
            <input type="text" id="first" name="first" required
              value={toSend.first}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="last">Last name:</label>
            <input type="text" id="last" name="last"
              value={toSend.last}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="last">Your email:</label>
            <input type="text" id="email" name="email" required
              value={toSend.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="last">Your message:</label>
            <textarea row={4} id="message" name="message" required minLength="10" maxLength="1000"
              value={toSend.message}
              onChange={handleChange}
            />
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
