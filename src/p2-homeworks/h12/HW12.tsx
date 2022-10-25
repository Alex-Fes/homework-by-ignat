import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {changeThemeC, initStateType} from "./bll/themeReducer";


const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, initStateType>(state => state.theme); // useSelector
    const dispatch = useDispatch();
    const onChangeCallback = (choseTheme: string) => {

        dispatch(changeThemeC(choseTheme))
    }

    // useDispatch, onChangeCallback

    return (
        <div className={s[theme.theme]}>
            <hr/>
            <span className={s[theme.theme] + '-text'}>
                homeworks 12
            </span>
            <SuperSelect options={themes} onChangeOption={onChangeCallback} value={theme.theme}/>
            <SuperRadio options={themes} onChangeOption={onChangeCallback} value={theme.theme}/>


            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
