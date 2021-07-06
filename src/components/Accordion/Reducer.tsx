export type ActionType = {
    type: "TOGGLE-COLLAPSED";
};

export type StateType = {
    collapsed: boolean;
};

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "TOGGLE-COLLAPSED":
            // const copyState = {...state}
            state.collapsed = !state.collapsed
            return {...state};

        default:
            return state;
    }
};
