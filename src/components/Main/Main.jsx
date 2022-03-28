import React from 'react'
import { Header } from '../Header/Header'
import s from './Main.module.scss'

export const Main = () => {
  return (
    <section className={s.main}>
      <Header />
    </section>
  )
}
