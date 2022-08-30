import React from "react"
import style from './Preloader.module.css'


export const Preloader = () => {
    return <>
    <div className={style.preloader}>
        <div className={style.preloader__image}></div>
    </div>
    </>
};