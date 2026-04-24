// import { createReducer } from '@reduxjs/toolkit';

// import { changeCityAction } from './action';
// import { Action } from 'history';
import { OfferType } from '../components/const';
import { CITIES, CityName } from '../mocks/city';
// import { DEFAULT_CITY } from '../components/const';
import { offers } from '../mocks/offers';
// import { createReducer } from '@reduxjs/toolkit';
// import { setCity } from './action';

interface OffersState {
  city: CityName | undefined;
  offers: OfferType[];
}

const initialState : OffersState = {
  city: CITIES[0].name,
  offers, // все предложения
};


const enum ActionType {
  SetCity = 'offers/setCity',
}

const setCity = (city: CityName) => ({
  payload: city,
  type: ActionType.SetCity,
});
// initialState - начальное состояние
// incrementStep - action  - действие, которое надо сделать диспетчером и сохранить в хранилище. Оно описывается в action.ts


// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(setCity, (state, action) => {
//       state.city = action.payload;
//     });
// });

const reducer = (
  state: OffersState = initialState,
  action: { payload: unknown; type: ActionType }): OffersState => {
  switch (action.type) {
    case ActionType.SetCity:
      return {
        ...state,
        city: action.payload as CityName,
      };
    default:
      return state;
  }
};


export { reducer, setCity };
