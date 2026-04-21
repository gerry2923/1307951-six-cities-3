import { createReducer } from '@reduxjs/toolkit';

import { changeCityAction } from './action';
import { DEFAULT_CITY } from '../components/const';
import { offers } from '../mocks/offers';

const initialState = {
  city: DEFAULT_CITY,
  offers: offers, // все предложения
};

// initialState - начальное состояние
// incrementStep - action  - действие, которое надо сделать диспетчером и сохранить в хранилище. Оно описывается в action.ts


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state) => {
      // state.step = state.step + STEP_COUNT;
    });
});

export {reducer};
