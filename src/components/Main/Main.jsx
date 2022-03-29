import axios from "axios";
import React, { useEffect, useState } from "react";
import { getToken } from "../../helpers/getToken";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { List } from "../List/List";
import { PopupCreate } from "../PopupCreate/PopupCreate";
import { PopupDelete } from "../PopupDelete/PopupDelete";
import s from "./Main.module.scss";

export const Main = () => {
  const [deleteId, setDeleteId] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [users, setUsers] = useState([]);
  const [initialUsers, setInitialUsers] = useState([]); // изначальный массив с пользователями(без сортировки), меняется только один раз
  const [token, setToken] = useState(null);
  const getUsers = () => {
    axios
      .get("account", {}, { headers: { Authorization: token } })
      .then((response) => {
        const newUsers = response.data.map((item) => {
          return {
            ...item,
            ...item.user,
            ...item.organization,
            role: item?.roles.some((item) => item.name === "ROLE_ADMIN")
              ? "Админ"
              : "Пользователь",
          };
        });
        setUsers(newUsers);
        setInitialUsers(newUsers);
      });
  };
  useEffect(() => {
    getToken().then((resp) => {
      setToken(resp);
    });
    console.log('users', users)
    getUsers();
  }, []);
  const deleteUser = () => {
    axios.delete(`account/${deleteId}`).then(() => {
      getUsers()
    });
  };
  return (
    <section className={s.main}>
      <div className={s.wrapper}>
        <Header initialUsers={initialUsers} users={users} setUsers={setUsers} />
        <List setDeleteId={setDeleteId} users={users} />
        <Footer setIsCreating={setIsCreating} />
        {deleteId && (
          <PopupDelete deleteUser={deleteUser} setDeleteId={setDeleteId} />
        )}
        {isCreating && <PopupCreate setIsCreating={setIsCreating} />}
      </div>
    </section>
  );
};
