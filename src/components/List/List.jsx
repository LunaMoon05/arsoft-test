import React from "react";
import s from "./List.module.scss";
import { ListItem } from "./ListItem/ListItem";

export const List = props => {
  const {users, setDeleteId} = props
  return (
    <div className={s.list}>
      {users.map(user => {
        return <ListItem setDeleteId={setDeleteId} key={user.id} data={user} />
      })}
    </div>
  );
};
