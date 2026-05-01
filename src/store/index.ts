// import { reducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';

import { offersSlice } from '../store/slices/offers';

export const store = configureStore({
  reducer: {
    [offersSlice.name]: offersSlice.reducer}
});
