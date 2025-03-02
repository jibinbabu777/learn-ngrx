import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";

const _counterReducer = createReducer(initialState,
    on(increment, (state)=>{
return  {
    ...state,
    counter: state.counter++
}
    }),
    on(decrement, (state)=>{
        return {
            ...state,
            counter: state.counter--
        }
    }),
    on(reset, (state)=>{
        return {
            ...state,
            counter: state.counter
        }
    })
)

export function counterReducer(state:any, actions: any){
    return _counterReducer(state, actions)
}