import React from "react";
import s from "./Pages.module.scss";
import arrow from "../../../assets/images/arrowSort.svg";

export const Pages = () => {
  return (
    <div className={s.pages}>
      <div className={s.titleWrapper}>
        <span className={s.title}>Страницы</span>
      </div>
      <div className={s.widget}>
        <button style={{ borderLeft: "none" }} className={s.btn}>
          <img
            style={{ width: "70%", height: "70%", transform: "rotate(90deg)" }}
            src={arrow}
            alt="prev page"
          />
        </button>
        <button className={s.page}>1</button>
        <button
          style={{
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
          }}
          className={s.page}
        >
          2
        </button>
        <button className={s.page}>3</button>
        <button className={s.btn}>
          <img
            style={{ width: "70%", height: "70%", transform: "rotate(-90deg)" }}
            src={arrow}
            alt="next page"
          />
        </button>
      </div>
    </div>
  );
};
