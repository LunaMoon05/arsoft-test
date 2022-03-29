import React from 'react'
import s from './MainBtn.module.scss'

export const MainBtn = props => {
  const {text, variant, type, onClick, style} = props
  const variantClass = variant === 'red' ? s.btnRed : null
  return (
    <button type={type} style={style} onClick={onClick} className={s.btn + ' ' + variantClass}>{text}</button>
  )
}
