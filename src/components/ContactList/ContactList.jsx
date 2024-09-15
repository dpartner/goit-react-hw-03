import s from './ContactList.module.css'
import Contact from '../Contact/Contact'

const ContactList = () => {
  return (
    <ul className={s.contactList}>
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </ul>
  )
}

export default ContactList