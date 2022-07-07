import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import style from "./Header.module.css";

function Header() {
    return (
        <div className={style.main}>
            <div className={style.nav}>
                <input type="checkbox" id="hmt" className={style.hiddenMenuTicker}/>
                <label className={style.btnMenu} htmlFor="hmt">
                    <span className={style.first}></span>
                    <span className={style.second}></span>
                    <span className={style.third}></span>
                </label>
                <nav className={style.hiddenMenu}>
                    <div className={style.item}><NavLink to={PATH.PRE_JUNIOR}>PRE_JUNIOR</NavLink></div>
                    <div className={style.item}><NavLink to={PATH.JUNIOR}>JUNIOR</NavLink></div>
                    <div className={style.item}><NavLink to={PATH.JUNIOR_PLUS}> JUNIOR +</NavLink></div>
                </nav>
            </div>
        </div>
    )
}

export default Header
