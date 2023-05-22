import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface PanelState {
  percent: number;
}

const initialState = {
  percent: 0,
};

export const todoProcessPercentReducer = createSlice({
  name: 'todoprocesspercent',
  initialState,
  reducers: {
    setTodoProcessPercent: (state, action: PayloadAction<number>) => {
      state.percent = action.payload;
    },
  },
});

export const { setTodoProcessPercent } = todoProcessPercentReducer.actions;

export const todoProcessPercent = (state: RootState) =>
  state.todoprocesspercent.percent;

export default todoProcessPercentReducer.reducer;
