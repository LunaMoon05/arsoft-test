import React, { useEffect, useState } from "react";
import s from "./Header.module.scss";
import grow from "../../helpers/grow.module.scss";
import { HeaderItem } from "./HeaderItem";
import { sortArray } from "./../../helpers/sortArray";

export const Header = (props) => {
  const { initialUsers, setUsers } = props;
  const sorting = (field, id) => {
    const copyUsers = [...initialUsers];
    const sortedUsers = copyUsers.sort(sortArray(field));
    setUsers(sortedUsers);
    // const newBtnsArr = btnsArr.map(item => {
    //   if(item.text === id) {
    //     return {...item, sortType: item.sortType === 0 ? 1 : item.sortType === 1 ? 2 : 0}
    //   }
    //   return item
    // })
    // setBtnsArr(newBtnsArr)
  };
  const btnsArr = [
    {
      text: "Имя",
      growClass: grow.name,
      sortType: 0,
      sorting: () => sorting('name', 'Имя')
    },
    {
      text: "Фамилия",
      growClass: grow.surname,
      sortType: 0,
      sorting: () => sorting('lastName', 'Фамилия')
    },
    {
      text: "Username",
      growClass: grow.username,
      sortType: 0,
      sorting: () => sorting('email', 'Username')
    },
    {
      text: "Роль",
      growClass: grow.role,
      sortType: 0,
      sorting: () => sorting('role', 'Роль')
    },
    {
      text: "Организация",
      growClass: grow.company,
      sortType: 0,
      sorting: () => sorting('companyTitle', 'Организация')
    },
    {
      text: "Изображения",
      growClass: grow.img,
      sorting: null,
    },
  ]
  return (
    <div className={s.header}>
      <ul className={s.list}>
        {btnsArr.map((item) => {
          return (
            <HeaderItem sort={item.sortType} key={item.text} sorting={item.sorting} item={item} />
          );
        })}
      </ul>
    </div>
  );
};
