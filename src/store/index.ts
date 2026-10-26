import { combineReducers, configureStore } from '@reduxjs/toolkit';
// добавили новое имя для reducer cityOffersSlice.reducer
import uiReducer from './ui/ui-slice';
import offersReducer from './offers/offers-slice';
import offerReducer from './offer/offer-slice';
import userReducer from './user/user-slice';
import commentsReducer from './comments/comments-slice';
import favoritesReducer from './favorites/favorites-slice';
import { createAPI } from '../services/api';

export const api = createAPI();

const reducer = combineReducers({
  ui: uiReducer,
  offers: offersReducer,
  user: userReducer,
  offer: offerReducer,
  comments: commentsReducer,
  favorites: favoritesReducer,
});


export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    }),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
