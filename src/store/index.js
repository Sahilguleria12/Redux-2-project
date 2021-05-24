//import { createStore } from 'redux';

import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            //state.counter = state.counter + action.amount;
            state.counter = state.counter + action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const initialAuth = { isAuthenticated: false};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuth,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});


/* const counterReducer = (state= initialState,action) => {
   if(action.type === 'increment') {
        return {
            showCounter: state.showCounter,
            counter: state.counter + 1
        }
    }

    if(action.type === 'decrement') {
        return {
            showCounter: state.showCounter,
            counter: state.counter - 1
        }
    }

    if(action.type === 'increase') {
        return {
            showCounter: state.showCounter,
            counter: state.counter + action.amount
        }
    }

    if(action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }

    return state;
} */

//const store = createStore(counterReducer);

const store = configureStore ({
    reducer: { counter: counterSlice.reducer,
                auth: authSlice.reducer }
});

export const counterActions = counterSlice.actions;

export const authActions = authSlice.actions;

export default store;