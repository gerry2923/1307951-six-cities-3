import { OfferType } from '../components/const';
import { CITIES, CityName } from '../mocks/city';
import { offers } from '../mocks/offers';
import { createReducer } from '@reduxjs/toolkit';
import { setCity } from './action._ts';

interface OffersState {
  city: CityName | undefined;
  offers: OfferType[];
}

const initialState : OffersState = {
  city: CITIES[0].name,
  offers, // все предложения
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    });
});

export { reducer, setCity };
