import React from "react";
import header from "./Header.module.css";
import style from "../button/Button.module.css";

function Header() {
  return (
    <div className={header.header}>
      <h3>Hello Word</h3>
      <button className={style.btn}>Log In</button>
    </div>
  );
}

export default Header;
