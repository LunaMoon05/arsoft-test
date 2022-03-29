import React from 'react'
import s from './MainBtn.module.scss'

export const MainBtn = props => {
  const {text, type, onClick, style} = props
  return (
    <button type={type} style={style} onClick={onClick} className={s.btn}>{text}</button>
  )
}
