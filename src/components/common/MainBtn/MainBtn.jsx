import React from 'react'
import s from './MainBtn.module.scss'

export const MainBtn = props => {
  const {text, onClick, style} = props
  return (
    <button style={style} onClick={onClick} className={s.btn}>{text}</button>
  )
}
