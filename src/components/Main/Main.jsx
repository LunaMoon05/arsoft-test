import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getToken } from '../../helpers/getToken'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { List } from '../List/List'
import { PopupCreate } from '../PopupCreate/PopupCreate'
import { PopupDelete } from '../PopupDelete/PopupDelete'
import s from './Main.module.scss'

export const Main = () => {
  const [deleteId, setDeleteId] = useState(null)
  const [isCreating, setIsCreating] = useState(false)
  const [users, setUsers] = useState([])
  const [token, setToken] = useState(null)
  useEffect(() => {
    getToken().then(resp => {
      setToken(resp)
    })
    axios.get('account', {}, {headers: {Authorization: token}})
  .then((response) => {
    setUsers(response.data)
  })
  }, [])
  return (
    <section className={s.main}>
      <div className={s.wrapper}>
        <Header />
        <List users={users} />
        <Footer setIsCreating={setIsCreating} />
        {deleteId && <PopupDelete setDeleteId={setDeleteId} />}
        {isCreating && <PopupCreate setIsCreating={setIsCreating} />}
      </div>
    </section>
  )
}
