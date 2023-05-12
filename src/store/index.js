import { createSlice, configureStore } from '@reduxjs/toolkit';

<<<<<<< HEAD
const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
=======
const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
>>>>>>> ba285b450d07f5ee9f0fc408233ba21f9d25a170
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
<<<<<<< HEAD
      state.counter = state.counter + action.amount;
=======
      state.counter = state.counter + action.payload;
>>>>>>> ba285b450d07f5ee9f0fc408233ba21f9d25a170
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

<<<<<<< HEAD
const store = configureStore({
  reducer: counterSlice.reducer,
});
=======
const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
>>>>>>> ba285b450d07f5ee9f0fc408233ba21f9d25a170

export const counterActions = counterSlice.actions;
export default store;
