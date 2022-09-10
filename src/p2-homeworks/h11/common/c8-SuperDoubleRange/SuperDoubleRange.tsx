import React from 'react'
import {Box, Slider} from '@mui/material';


type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (props: SuperDoubleRangePropsType) => {
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


    const onChangeHandler = (event: Event, newValue: number | number[]) => {
        props.onChangeRange && props.onChangeRange(newValue as [number, number]);
    }
    return (
        <>

                <Box sx={{ width: 300 }}>
                <Slider
                    //sx={rangeStyle}
                    getAriaLabel={() => 'Range'}
                    value={props.value}
                    onChange={onChangeHandler}
                    valueLabelDisplay="auto"
                    disableSwap
                />
                </Box>
            </>

    )
}

export default SuperDoubleRange;
