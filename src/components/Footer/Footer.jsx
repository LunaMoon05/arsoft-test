import React from 'react'
import s from './Footer.module.scss'
import { Pages } from './Pages/Pages'

export const Footer = props => {
  const {setIsCreating} = props
  return (
    <div className={s.footer}>
      <Pages />
      <button onClick={() => setIsCreating(true)} className={s.create}>Создать пользователя</button>
    </div>
  )
}
