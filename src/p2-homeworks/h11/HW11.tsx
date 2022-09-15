import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

export type CurrentValueType = Array<number>

function HW11() {
    // const [value1, setValue1] = useState(0)
    // const [value2, setValue2] = useState(100)
    //
    // const onChangeRange = (currentValue: number) => {
    //     setValue1(currentValue)
    // }
    //
    // const onChangeSuperDoubleRange = (currentValue: CurrentValueType) => {
    //     setValue1(currentValue[0])
    //     setValue2(currentValue[1])
    // }

    const [value, setValue] = useState<CurrentValueType>([0, 100])

    const onChangeRange = (newValue: number) => {
       if (newValue < value[1]) setValue([newValue, value[1]])
    }

    const onChangeSuperDoubleRange = (newValue: CurrentValueType) => {
        setValue(newValue)
    }


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div  style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <span>{value[0]}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                     value={value[0]}

                    // сделать так чтоб value1 изменялось
                />
                <span>{value[1]}</span>
            </div>

            <div style={{display: 'flex', flexDirection: 'row'}}>
                <span>{value[0]}</span>
                <SuperDoubleRange
                    onChangeRange={onChangeSuperDoubleRange}
                    value={value}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value[1]}</span>
            </div>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
