import React, {useState} from "react";
import Request from './Request'
import {RequestsAPI} from "./RequestsAPI";


function HW13() {
    let [checked, setChecked] = useState<boolean>(false);
    const onChangeSuccess = (checked: boolean) => {
        setChecked(checked)
    }
    const onSendRequest = () => {
        RequestsAPI.getResponse(checked)
            .then(res => console.log(res.data))
            .catch(error => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }

    return (
        <div>
            <hr/>
            Homework 13
            <Request
                onChangeSuccess={onChangeSuccess}
                onSendRequest={onSendRequest}
            />
        </div>)
}

export default HW13;