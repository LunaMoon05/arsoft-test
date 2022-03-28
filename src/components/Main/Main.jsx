import React, { useState } from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { List } from '../List/List'
import { PopupCreate } from '../PopupCreate/PopupCreate'
import { PopupDelete } from '../PopupDelete/PopupDelete'
import s from './Main.module.scss'

export const Main = () => {
  const [deleteId, setDeleteId] = useState(null)
  const [isCreating, setIsCreating] = useState(false)
  return (
    <section className={s.main}>
      <div className={s.wrapper}>
        <Header />
        <List />
        <Footer setIsCreating={setIsCreating} />
        {deleteId && <PopupDelete setDeleteId={setDeleteId} />}
        {isCreating && <PopupCreate setIsCreating={setIsCreating} />}
      </div>
    </section>
  )
}
