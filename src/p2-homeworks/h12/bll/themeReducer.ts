type ActionType = ReturnType<typeof changeThemeC>

export type initStateType = {
    theme: string
}
const initState: initStateType = {
    theme: 'red'
};

export const themeReducer = (state = initState, action: ActionType): initStateType => {
    // fix any
    switch (action.type) {

        case 'CHANGE-THEME':
            return {
                ...state, theme: action.choseTheme
            }
        default:
            return state;
    }
};

export const changeThemeC = (choseTheme: string) => ({type: 'CHANGE-THEME', choseTheme}); // fix any