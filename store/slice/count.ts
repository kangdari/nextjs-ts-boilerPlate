import { createSlice } from "@reduxjs/toolkit";

export interface Count {
  count: number;
}

const initialState = {
  count: 0,
};

const count = createSlice({
  name: "count",
  initialState,
  reducers: {
    increaseCount(state) {
      state.count = state.count + 1;
    },
    resetCount(state) {
      state.count = 0;
    },
  },
});

export const { increaseCount, resetCount } = count.actions;
export default count.reducer;
