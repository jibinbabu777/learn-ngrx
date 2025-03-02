import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";

// Initial state definition
const initialState = {
    counter: 0
};

const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => ({
        ...state,
        counter: state.counter + 1 // Fix: Use `+ 1` instead of `++`
    })),
    on(decrement, (state) => ({
        ...state,
        counter: state.counter - 1 // Fix: Use `- 1` instead of `--`
    })),
    on(reset, (state) => ({
        ...state,
        counter: 0 // Reset counter to 0
    }))
);

export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}
