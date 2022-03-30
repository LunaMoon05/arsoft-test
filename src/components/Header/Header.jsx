import React, { useEffect, useState } from "react";
import s from "./Header.module.scss";
import grow from "../../helpers/grow.module.scss";
import { HeaderItem } from "./HeaderItem";
import { sortArray } from "./../../helpers/sortArray";

export const Header = (props) => {
  const { initialUsers, setUsers } = props;
  const sorting = (field, isReversed) => {
    const copyUsers = [...initialUsers];
    const sortedUsers = isReversed ? copyUsers.sort(sortArray(field)).reverse() : copyUsers.sort(sortArray(field));
    setUsers(sortedUsers);
  };
  const btnsArr = [
    {
      text: "Имя",
      growClass: grow.name,
      sortType: 0,
      sorting: (isReversed) => sorting('name', isReversed)
    },
    {
      text: "Фамилия",
      growClass: grow.surname,
      sortType: 0,
      sorting: (isReversed) => sorting('lastName', isReversed)
    },
    {
      text: "Username",
      growClass: grow.username,
      sortType: 0,
      sorting: (isReversed) => sorting('email', isReversed)
    },
    {
      text: "Роль",
      growClass: grow.role,
      sortType: 0,
      sorting: (isReversed) => sorting('role', isReversed)
    },
    {
      text: "Организация",
      growClass: grow.company,
      sortType: 0,
      sorting: (isReversed) => sorting('companyTitle', isReversed)
    },
    {
      text: "Изображения",
      growClass: grow.img,
      sorting: null,
    },
  ]
  const [sorts, setSorts] = useState({
    "Имя": 0,
    "Фамилия": 0,
    "Username": 0,
    "Роль": 0,
    "Организация": 0,
    "Изображение": 0
  })
  return (
    <div className={s.header}>
      <ul className={s.list}>
        {btnsArr.map((item) => {
          return (
            <HeaderItem setSorts={setSorts} sorts={sorts} sort={sorts[item.text]} key={item.text} sorting={item.sorting} item={item} />
          );
        })}
      </ul>
    </div>
  );
};
