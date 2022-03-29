import React from 'react'
import s from './Footer.module.scss'
import { Pages } from './Pages/Pages'

export const Footer = props => {
  const {setIsCreating, token, page, setPage} = props
  return (
    <div className={s.footer}>
      <Pages page={page} token={token} setPage={setPage} />
      <button onClick={() => setIsCreating(true)} className={s.create}>Создать пользователя</button>
    </div>
  )
}
