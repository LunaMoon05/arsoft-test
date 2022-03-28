import React from "react";
import s from "./Header.module.scss";
import grow from '../../helpers/grow.module.scss'
import { ArrowSort } from './../common/ArrowSort';

export const Header = () => {
  const btnsArr = [
    {
      text: "Имя",
      growClass: grow.name,
      sorting: true,
    },
    {
      text: "Фамилия",
      growClass: grow.surname,
      sorting: true,
    },
    {
      text: "Username",
      growClass: grow.username,
      sorting: true,
    },
    {
      text: "Роль",
      growClass: grow.role,
      sorting: true,
    },
    {
      text: "Организация",
      growClass: grow.company,
      sorting: true,
    },
    {
      text: "Изображения",
      growClass: grow.img,
      sorting: false,
    },
  ];
  return (
    <div className={s.header}>
      <ul className={s.list}>
        {btnsArr.map(item => {
          return (
            <li className={item.growClass}>
              <button className={s.btn}>
                <span>{item.text}</span>
                {item.sorting && <ArrowSort />}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
