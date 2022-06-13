import React from 'react'
import {AffairType} from "./HW2";
import {inspect} from "util";
import styles from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div >
            <div className={styles.content}>
                <span className={styles.id}>{props.affair._id}</span>
                <span className={styles.name}>{props.affair.name}</span>
                <span className={styles.priority}>{props.affair.priority}</span>
                <button className={styles.deleteBtn} onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair;
