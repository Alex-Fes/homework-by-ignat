import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


export type RequestPropsType = {
    onChangeSuccess: (checked: boolean) => void
    onSendRequest: () => void
}

function Request(props: RequestPropsType) {
    return (
        <div>
            <SuperButton value={'Request'} onClick={props.onSendRequest}>Request</SuperButton>
            <input type="checkbox" onClick={(e) => {
                props.onChangeSuccess(e.currentTarget.checked)
            }}/>
        </div>)
}

export default Request;