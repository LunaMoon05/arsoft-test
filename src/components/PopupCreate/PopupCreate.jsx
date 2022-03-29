import React, { useEffect, useState } from "react";
import { Popup } from "../common/Popup";
import s from "./PopupCreate.module.scss";
import { MainBtn } from "./../common/MainBtn/MainBtn";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Select from 'react-select';
import axios from "axios";

export const PopupCreate = props => {
  const {setIsCreating, token} = props
  const schema = yup.object({
    name: yup.string().required('Обязательное поле').min(2, 'Минимум 2 символа').max(20, 'Максимум 20 символов'),
    lastName: yup.string().required('Обязательное поле').min(2, 'Минимум 2 символа').max(20, 'Максимум 20 символов'),
    email: yup.string().required('Обязательное поле').email('Неправильный email').min(2, 'Минимум 10 символов'),
    password: yup.string().required('Обязательное поле').matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
      "Пароль должен состоять из латинских букв и содержать минимум 8 символов, а так же 1 спец. символ"
    ),
    role: yup.string().required('Выберите роль'),
    company: yup.string().required('Выберите организацию'),
    birth: yup.string().matches(/(\d{2}).(\d{2}).(\d{4})/, 'Неправильный формат даты').nullable()
  })
  const { register, handleSubmit, setValue, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
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
  const [companies, setCompanies] = useState([])
  useEffect(() => {
    axios.get('organization', {}, { headers: { Authorization: token }}).then(resp => {
      const newCompanies = resp?.data?.data.map(item => {
        return {value: item.companyTitle, label: item.companyTitle}
      })
      setCompanies(newCompanies)
    })
  }, [])
  const [selectedRole, setSelectedRole] = useState(null)
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [birth, setBirth] = useState('')
  const birthOnChange = val => {
    if(val.nativeEvent.inputType === 'deleteContentBackward') {
      setBirth('')
      setValue('birth', null)
    } else {
        if(val.target.value.length <= 10) {
          setBirth(val.target.value)
          setValue('birth', val.target.value)
        if(val.target.value.length === 2) {
          setBirth(val.target.value + '.')
          setValue('birth', val.target.value + '.')
        } 
        if(val.target.value.length === 5) {
          setBirth(val.target.value + '.')
          setValue('birth', val.target.value + '.')
        }
      }
    }
  }
  useEffect(() => {
    setValue('company', selectedCompany?.value)
    setValue('role', selectedRole?.value)
  }, [selectedCompany, selectedRole])
  const onSubmit = (data) => {
    const formattedBirth = `${birth.substring(6, 10)}-${birth.substring(3, 5)}-${birth.substring(0, 2)}T00:00:00.000`
    if(data.role === 'Пользователь') {
      axios.post('auth/reg', {
        name: data.name,
        last_name: data.lastName,
        birth_date: formattedBirth,
        company_title: data.company, //название существующей компании
        email: data.email,
        password: data.password
      }).then(resp => {
        console.log('resp regist:', resp)
      })
    }
  }
  const onError = () => {
    console.log('errors', errors)
  }
  return (
    <Popup>
      <div className={s.create}>
        <span className={s.title}>Создание пользователя</span>
        <form className={s.form} onSubmit={handleSubmit(onSubmit, onError)}>
          <div className={s.item}>
            <label className={s.label} htmlFor="name">Имя: <span className={s.error}>{errors?.name?.message}</span></label>
            <input style={errors?.name?.message ? {color: 'red', border: '1px solid red'} : null} {...register("name")} placeholder="Введите имя" className={s.input} id='name' type="text" />
          </div>
          <div className={s.item}>
            <label className={s.label} htmlFor="surname">Фамилия: <span className={s.error}>{errors?.lastName?.message}</span></label>
            <input style={errors?.lastName?.message ? {color: 'red', border: '1px solid red'} : null} {...register("lastName")} placeholder="Введите фамилию" className={s.input} id='surname' type="text" />
          </div>
          <div className={s.item}>
            <label className={s.label} htmlFor="email">E-mail: <span className={s.error}>{errors?.email?.message}</span></label>
            <input style={errors?.email?.message ? {color: 'red', border: '1px solid red'} : null} {...register("email")} placeholder="Введите e-mail" className={s.input} id='email' type="email" />
          </div>
          <div className={s.item}>
            <label className={s.label} htmlFor="password">Пароль: <span className={s.error}>{errors?.password?.message}</span></label>
            <input style={errors?.password?.message ? {color: 'red', border: '1px solid red'} : null} {...register("password")} placeholder="Введите пароль" className={s.input} id='password' type="password" />
          </div>
          <div className={s.item}>
            <label className={s.label}>Роль: <span className={s.error}>{errors?.role?.message}</span></label>
            <Select className={errors?.role?.message ? s.selectError : null} placeholder='Выберите роль' onChange={(changedOption => setSelectedRole(changedOption))} value={selectedRole} options={roles} />
          </div>
          <div className={s.item}>
            <label className={s.label}>Организация: <span className={s.error}>{errors?.company?.message}</span></label>
            <Select className={errors?.company?.message ? s.selectError : null} placeholder='Выберите организацию' onChange={(changedOption => setSelectedCompany(changedOption))} value={selectedCompany} options={companies} />
          </div>
          <div className={s.item}>
            <label className={s.label} htmlFor="birth">Дата рождения: <span className={s.error}>{errors?.birth?.message}</span></label>
            <input onChange={birthOnChange} value={birth} placeholder="ДД.ММ.ГГГГ" className={s.input} id='birth' type="text" />
          </div>
          <div className={s.btnsWrapper}>
            <MainBtn variant='red' onClick={() => setIsCreating(false)} style={{width: '170px'}} text="Закрыть" />
            <MainBtn type='submit' style={{width: '170px'}} text="Сохранить" />
          </div>
        </form>
      </div>
    </Popup>
  );
};
