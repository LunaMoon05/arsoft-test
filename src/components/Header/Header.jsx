import React from "react";
import s from "./Header.module.scss";
import { ArrowSort } from './../common/ArrowSort';

export const Header = () => {
  const btnsArr = [
    {
      text: "Имя",
      growClass: s.name
    },
    {
      text: "Фамилия",
      growClass: s.surname
    },
    {
      text: "Username",
      growClass: s.username
    },
    {
      text: "Роль",
      growClass: s.role
    },
    {
      text: "Организация",
      growClass: s.company
    },
    {
      text: "Изображения",
      growClass: s.img
    },
  ];
  return (
    <div className={s.header}>
      <ul className={s.list}>
        {btnsArr.map(item => {
          return (
            <li className={s.item + ' ' + item.growClass}>
              <button className={s.btn}>
                <span>{item.text}</span>
                <ArrowSort />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
