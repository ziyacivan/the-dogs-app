// DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Interface
interface CounterState {
  value: number;
}

// Initial State with interface CounterState
const initialState: CounterState = {
  value: 0
};

// Constant with createSlice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented(state) {
      state.value++;
    },
    decremented(state) {
      state.value--;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    reset(state) {
      state.value = 0;
    }
  }
});

export const { incremented, decremented, amountAdded, reset } = counterSlice.actions;
export default counterSlice.reducer;