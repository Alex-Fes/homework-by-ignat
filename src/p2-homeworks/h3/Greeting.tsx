import React, {ChangeEvent, KeyboardEvent, MouseEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: (e: MouseEvent<HTMLButtonElement>) => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, onEnter, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input// need to fix with (?:)

    return (
        <div className={s.greeting}>
            <div>
                <input value={name} onKeyDown={onEnter} onChange={setNameCallback} className={inputClass}
                       onBlur={setNameCallback}/>
                <div className={s.error}>{error}</div>
            </div>
            <button className={s.button} onClick={addUser} disabled={!name}>add</button>
            <div className={s.count}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
