import React, { useEffect, useState } from "react";
import s from "./Pages.module.scss";
import arrow from "../../../assets/images/arrowSort.svg";
import axios from "axios";

export const Pages = props => {
  const {page, token, setPage} = props
  const [totalUsers, setTotalUsers] = useState(null)
  const [totalPages, setTotalPages] = useState(null)
  useEffect(() => {
    setTotalPages(Math.ceil(totalUsers / 3))
  }, [totalUsers])
  axios.get(`account`, {}, { headers: { Authorization: token } }).then(resp => {
    setTotalUsers(resp.data.length)
  })
  return (
    <div className={s.pages}>
      <div className={s.titleWrapper}>
        <span className={s.title}>Страницы</span>
      </div>
      <div className={s.widget}>
        {page !== 1 && 
        <button onClick={() => setPage(prev => prev - 1)} style={{ borderLeft: "none" }} className={s.btn}>
          <img
            style={{ width: "70%", height: "70%", transform: "rotate(90deg)" }}
            src={arrow}
            alt="prev page"
          />
        </button>}
        <button onClick={() => {
          if(page !== 1) {
            setPage(page - 1)
          }
        }} className={page === 1 ? s.page + ' ' + s.pageActive : s.page}>{page > 1 ? page - 1 : page}</button>
        <button
        onClick={() => {
          if(page === 1) {
            setPage(page + 1)
          }
        }}
          style={{
            borderLeft: "1px solid black",
            borderRight: page > 1 && "1px solid black",
          }}
          className={page > 1 ? s.page + ' ' + s.pageActive : s.page}
        >
          {page > 1 ? page : page + 1}
        </button>
        {page !== 1 && page !== totalPages && 
        <button onClick={() => setPage(page + 1)} className={s.page}>{page + 1}</button>}
        {page !== totalPages && 
        <button onClick={() => setPage(prev => prev + 1)} className={s.btn}>
          <img
            style={{ width: "70%", height: "70%", transform: "rotate(-90deg)" }}
            src={arrow}
            alt="next page"
          />
        </button>}
      </div>
    </div>
  );
};
