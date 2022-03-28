import React from 'react'
import s from './Footer.module.scss'
import { Pages } from './Pages/Pages'

export const Footer = () => {
  return (
    <div className={s.footer}>
      <Pages />
      <button className={s.create}>Создать пользователя</button>
    </div>
  )
}
