import React, { useEffect, useState } from "react";
import s from "./ListItem.module.scss";
import grow from "../../../helpers/grow.module.scss";
import downloadIcon from "../../../assets/images/download.svg";
import editIcon from "../../../assets/images/edit.svg";
import deleteIcon from "../../../assets/images/delete.svg";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Select from 'react-select';
import { useForm } from "react-hook-form";
import { MainBtn } from "../../common/MainBtn/MainBtn";
import axios from "axios";

export const ListItem = (props) => {
  const { style, editId, setEditId, position, setDeleteId, data } = props;
  const schema = yup.object({
    name: yup.string().required('Обязательное поле').min(2, 'Минимум 2 символа').max(20, 'Максимум 20 символов'),
    lastName: yup.string().required('Обязательное поле').min(2, 'Минимум 2 символа').max(20, 'Максимум 20 символов'),
    email: yup.string().required('Обязательное поле').email('Неправильный email').min(2, 'Минимум 10 символов'),
    role: yup.string().required('Выберите роль')
  })
  const roles = [
    {
      value: 'Админ',
      label: 'Админ'
    },
    {
      value: 'Пользователь',
      label: 'Пользователь'
    }
  ]
  const { register, handleSubmit, setValue, reset, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  useEffect(() => {
    reset({
      name: data?.name,
      lastName: data?.lastName,
      email: data?.email,
      role: data?.role
    })
  }, [])
  const [selectedRole, setSelectedRole] = useState(data?.role)
  useEffect(() => {
    setValue('role', selectedRole)
  }, [selectedRole])
  const isEdit = editId === position
  const userRoles = selectedRole === 'Пользователь' ? [{name: 'ROLE_USER'}] : [{name: 'ROLE_USER'}, {name: 'ROLE_ADMIN'}]
  const onSubmit = (formData) => {
    axios.put('account/edit', {id: data?.id, name: formData?.name, last_name: formData?.lastName, email: formData?.email, roles: userRoles}).then(resp => {
      console.log('CHANGED!', resp)
    })
  }
  const onError = () => {
    console.log('errors', errors)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} style={style} className={s.item}>
      <span>{position}</span>
      <div className={s.itemList}>
        {isEdit ? <div className={s.inputWrapper + ' ' + grow.name} ><input style={{maxWidth: 120}} {...register("name")} /><span className={s.error}>{errors?.name?.message}</span></div> : <span className={grow.name}>{data?.name}</span>}
        {isEdit ? <div className={s.inputWrapper + ' ' + grow.surname} ><input style={{maxWidth: 120}} {...register("lastName")} /><span className={s.error}>{errors?.lastName?.message}</span></div> : <span className={grow.surname}>{data?.lastName}</span>}
        {isEdit ? <div className={s.inputWrapper + ' ' + grow.username} ><input style={{maxWidth: 120}} {...register("email")} /><span className={s.error}>{errors?.email?.message}</span></div> : <span className={grow.username}>{data?.email ?? "no username"}</span>}
        {isEdit ? <div className={s.inputWrapper + ' ' + grow.role} ><Select className={s.select} placeholder={selectedRole} onChange={(changedOption => setSelectedRole(changedOption))} value={selectedRole} options={roles} /><span className={s.error}>{errors?.role?.message}</span></div> : <span className={grow.role}>{data?.role}</span>}
        <span className={grow.company}>{data?.organization?.companyTitle}</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: isEdit ? "flex-end" : "space-between",
          }}
          className={grow.img}
        >
          {isEdit ? null :
          <button style={{ flexGrow: 0.5 }} className={s.btn}>
            <img src={downloadIcon} alt="" />
          </button>}
          {isEdit ? null :
          <button
            onClick={() => setEditId(position)}
            style={{ width: 30, height: 30, flexGrow: 0.5 }}
            className={s.btn}
          >
            <img src={editIcon} alt="" />
          </button>}
          {isEdit ? null :
          <button onClick={() => setDeleteId(data?.email)} style={{ width: 30, height: 30 }} className={s.btn}>
            <img src={deleteIcon} alt="" />
          </button>}
          {isEdit && <MainBtn onClick={() => {
            setEditId(null)
            reset({
              name: data?.name,
              lastName: data?.lastName,
              email: data?.email,
              role: data?.role
            })
          }} variant='red' style={{width: 130, marginRight: 20}} text='Отмена' />}
          {isEdit && <MainBtn type='submit' style={{width: 130}} text='Обновить' />}
        </div>
      </div>
    </form>
  );
};
