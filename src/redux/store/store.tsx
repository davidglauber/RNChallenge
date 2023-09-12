import {configureStore} from '@reduxjs/toolkit';
import dinamicHeaderReducer from '../reducers/dinamicHeaderReducer';

export const store = configureStore({
  reducer: {
    dinamicHeader: dinamicHeaderReducer,
  },
});
