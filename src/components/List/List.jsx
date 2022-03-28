import React from "react";
import s from "./List.module.scss";
import { ListItem } from "./ListItem/ListItem";

export const List = () => {
  return (
    <div className={s.list}>
      <ListItem style={{borderBottom: '1px solid black'}} />
      <ListItem style={{borderBottom: '1px solid black'}} />
      <ListItem style={{borderBottom: '1px solid black'}} />
      <ListItem />
    </div>
  );
};
