import s from './Contact.module.css'
import symbol from '../../assets/symbol-defs.svg'
import clsx from 'clsx'

const Contact = () => {
  return (
    <div className={s.contactWrap}>
      <div className={s.textWrap}>
        <p className={s.name}>
          <svg className={s.icon} width='20' height='20'>
            <use href={symbol + '#icon-user'}/>
          </svg>
          Name</p>
        <p className={s.phone}>
        <svg className={clsx(s.icon, s.iconPhone)} width='20' height='20'>
            <use href={symbol + '#icon-phone'}/>
          </svg>
          432-4343-4443</p>
      </div>
      <button type='button'  className={s.button}>Delete</button>
    </div>
  )
}

export default Contact