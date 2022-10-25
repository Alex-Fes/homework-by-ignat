import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer
})

const store = createStore(reducers)

export default store
type ReducerType = typeof reducers
export type AppStoreType = ReturnType<ReducerType>

// @ts-ignore
window.store = store // for dev

