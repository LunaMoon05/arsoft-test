import React from "react"
import s from './Header.scss'

export const Header = () => {
  return (
    <div className={s.header}>
      <ul className={s.list}>
        <li className={s.item}>
          <button className={s.btn}>Имя</button>
        </li>
      </ul>
    </div>
  )
}
