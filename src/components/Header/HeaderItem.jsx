import React from "react";
import { ArrowSort } from "../common/ArrowSort";
import s from "./Header.module.scss";

export const HeaderItem = props => {
  const {item} = props
  return (
    <li className={item.growClass}>
      <button className={s.btn}>
        <span>{item.text}</span>
        {item.sorting && <ArrowSort />}
      </button>
    </li>
  );
};
