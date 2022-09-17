import {ActionType, reducer, StateType} from "./reducerAccordion";

test('reducer test toggle', ()=>{
    const state:StateType={
        collapsed:false
    }

    const newState = reducer(state, {type:"TOGGLE-ACCORDION"})
    expect(state.collapsed).toBe(false)
    expect(newState.collapsed).toBe(true)
    expect(newState.collapsed).not.toBe(state.collapsed)
})

test('reducer test toggle1', ()=>{
    const state:StateType={
        collapsed:false
    }

    expect(()=>{
        reducer(state, {type:"TOGGLEFAKE"})
    }).toThrowError()
})