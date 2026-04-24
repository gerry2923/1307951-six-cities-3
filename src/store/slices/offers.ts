import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { OfferType } from '../../components/const';
import { CITIES, CityName } from '../../mocks/city';
import { offers } from '../../mocks/offers';
// import { setCity } from '../action';

interface OffersState {
  city: CityName | undefined;
  offers: OfferType[];
}

const initialState : OffersState = {
  city: CITIES[0].name,
  offers, // все предложения
};


const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {
    setCity: (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    },
  },
});


// потом можно использовать offersAction.reducers.setCity
const offersAction = offersSlice.actions;

// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(setCity, (state, action) => {
//       state.city = action.payload;
//     });
// });

// export { reducer, setCity };

export { offersAction, offersSlice };
