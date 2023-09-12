import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  headerTitle: '',
};

export const dinamicHeaderReducer = createSlice({
  name: 'updateHeader',
  initialState: initialState,
  reducers: {
    updateHeaderTitle: (state, action) => {
      return {...state, headerTitle: action.payload};
    },
  },
});

export const {updateHeaderTitle} = dinamicHeaderReducer.actions;

export default dinamicHeaderReducer.reducer;
