import {ActionType, reducer, StateType} from "./Reducer";
import {action} from "@storybook/addon-actions";

test('reducer toggle boolean to opposite value', () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: "TOGGLE-COLLAPSED"})

    //expect
    expect(newState.collapsed).toBe(true)
})
test('reducer toggle boolean to opposite value', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: "TOGGLE-COLLAPSED"})

    //expect
    expect(newState.collapsed).toBe(false)
})