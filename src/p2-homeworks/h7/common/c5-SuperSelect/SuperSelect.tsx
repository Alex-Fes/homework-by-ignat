import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: any[]
    onChangeOption: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = [options.map((i, index) =>
        <option key={index} value={i}>{i}</option>)]; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {

        onChangeOption(e.currentTarget.value)

        // onChange, onChangeOption
    }


    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
