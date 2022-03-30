import React from "react";
import { Popup } from './../common/Popup';
import s from './PopupDelete.module.scss'
import { MainBtn } from './../common/MainBtn/MainBtn';

export const PopupDelete = props => {
  const {setDeleteId, deleteUser} = props
  return (
    <Popup>
      <div className={s.delete}>
        <span className={s.title}>
          Вы действительно хотите удалить пользователя?
        </span>
        <div className={s.btnsWrapper}>
          <MainBtn variant='red' onClick={() => setDeleteId(null)} style={{ width: "140px", padding: ".8rem" }} text="Нет" />
          <MainBtn onClick={() => {
            deleteUser()
            setDeleteId(null)
          }} style={{ width: "140px", padding: ".8rem" }} text="Да" />
        </div>
      </div>
    </Popup>
  );
};
