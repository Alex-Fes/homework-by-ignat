export type InitStateType = {
    loading: boolean
}

const initState: InitStateType = {
    loading: false
}
type LoadingACType = {
    type: string
    value: boolean
}

export const loadingReducer = (state = initState, action: LoadingACType): InitStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-LOADING-STATE': {
            return {...state, loading: action.value}
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean): LoadingACType => {
    return {type: 'CHANGE-LOADING-STATE', value: loading}
}