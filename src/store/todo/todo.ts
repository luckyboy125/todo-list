import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { staticData } from './todo.initialdata';

const initialState: TodoType[] = staticData
  .sort((preItem, currentItem) =>
    preItem.update_date > currentItem.update_date ? -1 : 1
  )
  .sort((preItem, currentItem) =>
    preItem.process === currentItem.process ? 0 : !preItem.process ? -1 : 1
  );

export const todoReducer = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createdTodoItem: (state, action: PayloadAction<TodoType>) => {
      state.push(action.payload);
      state
        .sort((preItem, currentItem) =>
          preItem.update_date > currentItem.update_date ? -1 : 1
        )
        .sort((preItem, currentItem) =>
          preItem.process === currentItem.process
            ? 0
            : !preItem.process
            ? -1
            : 1
        );
      return state;
    },
    checkedTodoItem: (state, action: PayloadAction<number>) => {
      const currentTodo = state[action.payload];
      const updatedTodo: TodoType = {
        ...currentTodo,
        process: !currentTodo.process,
        update_date: Date.now(),
      };
      state.splice(action.payload, 1);
      state.push(updatedTodo);
      state
        .sort((preItem, currentItem) =>
          preItem.update_date > currentItem.update_date ? -1 : 1
        )
        .sort((preItem, currentItem) =>
          preItem.process === currentItem.process
            ? 0
            : !preItem.process
            ? -1
            : 1
        );
      return state;
    },
    deletedTodoItem: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
      return state;
    },
  },
});

export const {
  checkedTodoItem,
  deletedTodoItem,
  createdTodoItem,
} = todoReducer.actions;

export const todoData = (state: RootState) => state.todo;

export default todoReducer.reducer;
