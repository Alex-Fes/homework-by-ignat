import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

type CurrentValueType = Array<number>

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

    const [value, setValue] = useState<[number, number]>([0, 100])

    const onChangeRange = (newValue: number) => {
        setValue([newValue, value[1]])
    }

    const onChangeSuperDoubleRange = (newValue: [number, number]) => {
        setValue(newValue as [number, number])
    }


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value[0]}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                     value={value[0]}

                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value[0]}</span>
                <SuperDoubleRange
                    onChangeRange={onChangeSuperDoubleRange}
                    value={value}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value[1]}</span>
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
