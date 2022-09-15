import * as React from 'react';
import {Box, Slider} from '@mui/material';
import {CurrentValueType} from "../../HW11";


type SuperDoubleRangePropsType = {
    onChangeRange: (value: CurrentValueType) => void
    value: CurrentValueType
    // min, max, step, disable, ...
}
function valuetext(value: number) {
    return `${value}°C`;
}

const minDistance = 1;

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({onChangeRange, value}: SuperDoubleRangePropsType) => {
    // const onChangeHandler = (event: Event, newValue: number | number[], activeThumb: number) => {
    //     if(typeof newValue === 'object'){
    //
    //         if (activeThumb === 0) {
    //             props.onChangeRange([newValue[0], props.value[1]])
    //         } else {
    //
    //             props.onChangeRange([props.value[0], newValue[1]])
    //         }
    //     }
    // }


    const onChangeHandler = (event: Event, newValue: number | number[], activeThumb: number) => {
        // props.onChangeRange && props.onChangeRange(newValue as [number, number]);
        if (!Array.isArray(newValue)) {
            return;
        }
        if(activeThumb === 0) {
           onChangeRange([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
           onChangeRange([value[0], Math.max(newValue[1], value[0] + minDistance)])
        }

    }
    return (
        <>

            <Box sx={{width: 300}}>
                <Slider
                    //sx={rangeStyle}
                    getAriaLabel={() => 'Range'}
                    value={value}
                    onChange={onChangeHandler}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                />
            </Box>
        </>

    )
}

export default SuperDoubleRange;
