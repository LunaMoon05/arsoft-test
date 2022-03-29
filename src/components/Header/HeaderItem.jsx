import React from "react";
import { ArrowSort } from "../common/ArrowSort";
import s from "./Header.module.scss";

export const HeaderItem = props => {
  const {item, sort, sorting} = props
  const sortType = sort === 0 ? 'default' : sort === 1 ? 'up' : 'down'
  return (
    <li className={item.growClass}>
      <button onClick={sorting} className={s.btn}>
        <span>{item.text}</span>
        {item.sorting && <ArrowSort type={sortType} />}
      </button>
    </li>
  );
};
