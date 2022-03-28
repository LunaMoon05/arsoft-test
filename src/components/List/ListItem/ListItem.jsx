import React from 'react'
import s from './ListItem.module.scss'
import grow from "../../../helpers/grow.module.scss";
import downloadIcon from '../../../assets/images/download.svg'
import editIcon from '../../../assets/images/edit.svg'
import deleteIcon from '../../../assets/images/delete.svg'

export const ListItem = props => {
  const {style} = props
  return (
    <div style={style} className={s.item}>
        <span>1</span>
        <div className={s.itemList}>
          <span className={grow.name}>Федор</span>
          <span className={grow.surname}>Достоевский</span>
          <span className={grow.username}>fdsotov1@ya.ru</span>
          <span className={grow.role}>Админ</span>
          <span className={grow.company}>Yandex</span>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} className={grow.img}>
            <button style={{flexGrow: .5}} className={s.btn}>
              <img src={downloadIcon} alt="" />
            </button>
            <button style={{width: 30, height: 30, flexGrow: .5}} className={s.btn}>
              <img src={editIcon} alt="" />
            </button>
            <button style={{width: 30, height: 30}} className={s.btn}>
              <img src={deleteIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
  )
}
