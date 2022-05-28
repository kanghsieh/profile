import styles from './index.module.scss';
import { forwardRef, useRef } from 'react'

const ContactMe = forwardRef((props, ref) => {
  return (
    <div className={styles.container}>
      <h1 ref={ref}>Contact Me</h1>
    </div>
  )
});
ContactMe.displayName = "ContactMe";

// function ContactMe() {

//   return (
//     <div className={styles.container}>
//       <h1>Contact Me</h1>
//     </div>
//   )
// }

export default ContactMe;
