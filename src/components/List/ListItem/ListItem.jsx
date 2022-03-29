import React from "react";
import s from "./ListItem.module.scss";
import grow from "../../../helpers/grow.module.scss";
import downloadIcon from "../../../assets/images/download.svg";
import editIcon from "../../../assets/images/edit.svg";
import deleteIcon from "../../../assets/images/delete.svg";

export const ListItem = (props) => {
  const { style, data } = props;
  const role = data?.roles.some(item => item.name === 'ROLE_ADMIN') ? 'Админ' : 'Пользователь'
  return (
    <div style={style} className={s.item}>
      <span>1</span>
      <div className={s.itemList}>
        <span className={grow.name}>{data?.user?.name}</span>
        <span className={grow.surname}>{data?.user?.lastName}</span>
        <span className={grow.username}>{data?.email ?? "no username"}</span>
        <span className={grow.role}>{role}</span>
        <span className={grow.company}>{data?.organization?.companyTitle}</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className={grow.img}
        >
          <button style={{ flexGrow: 0.5 }} className={s.btn}>
            <img src={downloadIcon} alt="" />
          </button>
          <button
            style={{ width: 30, height: 30, flexGrow: 0.5 }}
            className={s.btn}
          >
            <img src={editIcon} alt="" />
          </button>
          <button style={{ width: 30, height: 30 }} className={s.btn}>
            <img src={deleteIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
