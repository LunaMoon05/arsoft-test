import React, { useState } from "react";
import { Popup } from "../common/Popup";
import s from "./PopupCreate.module.scss";
import { MainBtn } from "./../common/MainBtn/MainBtn";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Select from 'react-select';

export const PopupCreate = props => {
  const {setIsCreating} = props
  const schema = yup.object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => console.log(data);
  const options = [
    {
      value: 'Админ',
      label: 'Админ'
    },
    {
      value: 'Пользователь',
      label: 'Пользователь'
    }
  ]
  const [selectedOption, setSelectedOption] = useState(null)
  return (
    <Popup>
      <div className={s.create}>
        <span className={s.title}>Создание пользователя</span>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.item}>
            <label className={s.label} htmlFor="name">Имя:</label>
            <input placeholder="Введите имя" className={s.input} id='name' type="text" />
          </div>
          <div className={s.item}>
            <label className={s.label} htmlFor="surname">Фамилия:</label>
            <input placeholder="Введите фамилию" className={s.input} id='surname' type="text" />
          </div>
          <div className={s.item}>
            <label className={s.label} htmlFor="email">E-mail:</label>
            <input placeholder="Введите e-mail" className={s.input} id='email' type="email" />
          </div>
          <div className={s.item}>
            <label className={s.label} htmlFor="password">Пароль:</label>
            <input placeholder="Введите пароль" className={s.input} id='password' type="password" />
          </div>
          <div className={s.item}>
            <label className={s.label} htmlFor="password">Роль:</label>
            <Select onChange={(changedOption => setSelectedOption(changedOption))} value={selectedOption} options={options} />
          </div>
          <div className={s.item}>
            <label className={s.label} htmlFor="birth">Дата рождения:</label>
            <input placeholder="ДД.ММ.ГГГГ" className={s.input} id='birth' type="text" />
          </div>
        </form>
        <div className={s.btnsWrapper}>
          <MainBtn onClick={() => setIsCreating(false)} style={{width: '170px'}} text="Закрыть" />
          <MainBtn style={{width: '170px'}} text="Сохранить" />
        </div>
      </div>
    </Popup>
  );
};
