import React from "react";
import { ArrowSort } from "../common/ArrowSort";
import s from "./Header.module.scss";

export const HeaderItem = props => {
  const {item, sorts, setSorts, sort, sorting} = props
  const sortType = sort === 0 ? 'default' : sort === 1 ? 'down' : 'up'
  const sortingHandler = () => {
    if(sort === 0) {
      sorting(false)
    } else if(sort === 1) {
      sorting(true)
    }
    let obj = {}
    for(let prop in sorts) {
      if(prop === item.text) {
        obj[prop] = sorts[prop] === 0 ? 1 : sorts[prop] === 1 ? 2 : 0
      } else {
        obj[prop] = 0
      }
    }
    setSorts(obj)
  }
  return (
    <li className={item.growClass}>
      <button onClick={sortingHandler} className={sort > 0 ? s.btn + ' ' + s.btnActive : s.btn}>
        <span>{item.text}</span>
        {item.sorting && <ArrowSort type={sortType} />}
      </button>
    </li>
  );
};
