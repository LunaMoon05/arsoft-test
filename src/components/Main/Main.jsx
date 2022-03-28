import React, { useState } from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { List } from '../List/List'
import { PopupDelete } from '../PopupDelete/PopupDelete'
import s from './Main.module.scss'

export const Main = () => {
  const [deleteId, setDeleteId] = useState(null)
  return (
    <section className={s.main}>
      <div className={s.wrapper}>
        <Header />
        <List />
        <Footer />
        {deleteId && <PopupDelete setDeleteId={setDeleteId} />}
      </div>
    </section>
  )
}
