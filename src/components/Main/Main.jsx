import React from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { List } from '../List/List'
import s from './Main.module.scss'

export const Main = () => {
  return (
    <section className={s.main}>
      <div className={s.wrapper}>
        <Header />
        <List />
        <Footer />
      </div>
    </section>
  )
}
