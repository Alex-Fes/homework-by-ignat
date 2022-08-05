import {UserType} from "../HW8";

export type ActionType = {
    type: string
    payload: number | string
}
type ReduserType = UserType | ActionType;

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const stateCopy = [...state];
            if (action.payload === 'up') {
                const sortByField = (field: string) => {
                    return (a: { [x: string]: number; }, b: { [x: string]: number; }) => a[field] > b[field] ? 1 : -1;
                }
                return [].slice.call(stateCopy).sort(sortByField('name'));
                // const sortUpByName = (stateCopy) => {
                //     return stateCopy.sort(function (a, b) {
                //         if (a.name < b.name) {
                //             return -1
                //         }
                //         if (a.name > b.name) {
                //             return 1
                //         }
                //         return 0;
                //     })
                // }
                // return sortUpByName(stateCopy)
            }
            if (action.payload === 'down') {
                const sortByField = (field: string) => {
                    return (a: { [x: string]: number; }, b: { [x: string]: number; }) => a[field] < b[field] ? 1 : -1;
                }
                return [].slice.call(stateCopy).sort(sortByField('name'));
            }
            return stateCopy;
        }
        case 'check': {
            const stateCopy = [...state];
            // const sortByField = (field:string) => {
            //     return (a, b) => a[field] > b[field] ? 1 : -1;
            // }
            // return [].slice.call(stateCopy).sort(sortByField('age'));
            return stateCopy.filter(f => f.age > action.payload);
        }
        default:
            throw new Error("I don't understand this action type");
    }
}