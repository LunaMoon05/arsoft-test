import React from "react";
import s from "./List.module.scss";
import { ListItem } from "./ListItem/ListItem";

export const List = props => {
  const {users, editId, setEditId, page, setDeleteId} = props
  const position = (page - 1) * 3
  return (
    <div className={s.list}>
      {users.map((user, index) => {
        return <ListItem setEditId={setEditId} editId={editId} position={position + (index + 1)} setDeleteId={setDeleteId} key={user.id} data={user} />
      })}
    </div>
  );
};
