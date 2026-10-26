// selectors.ts
import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { selectAllOffers } from '../offers/offers-slice';
import { selectAuthorizationStatus } from '../user/user-slice';
import { AutorizationStatus } from '../../components/const';
import { ALL_CITIES_NAMES } from '../../components/const';
import { TOffer } from '../../components/types';

export const selectFavoriteIds = (state: RootState) => state.favorites.favoriteIds;
export const selectFavoritesStatus = (state: RootState) => state.favorites.status;
export const selectFavoritePendingIds = (state: RootState) => state.favorites.pendingIds;


// если пользователь НЕ авторизован, то список с id обнуляется
export const selectEffectiveFavoriteIds = createSelector(
  [selectFavoriteIds, selectAuthorizationStatus],
  (favoriteIds, status) =>
    status === AutorizationStatus.Auth ? favoriteIds : []
);

export const selectFavoriteIdSet = createSelector(
  [selectEffectiveFavoriteIds],
  (favoriteIds) => new Set(favoriteIds)
);

export const selectFavoritesLength = createSelector(
  [selectFavoriteIds],
  (favoriteIds) => favoriteIds.length
);

export const selectOffersWithFavorites = createSelector(
  [selectAllOffers, selectFavoriteIdSet],
  (offers, favoriteSet) =>
    offers.map((offer) => ({ ...offer, isFavorite: favoriteSet.has(offer.id) }))
);


export const selectFavoriteOffers = createSelector(
  [selectAllOffers, selectFavoriteIdSet],
  (offers, favoriteSet) => offers.filter((offer) => favoriteSet.has(offer.id))
);

export const selectFavoritesByCityName = createSelector(
  [selectFavoriteOffers],
  (offers) => {

    const favoriteOffersByCity = new Map<string, TOffer[]>();
    for (const offer of offers) {

      const list = favoriteOffersByCity.get(offer.city.name);

      if (list) {
        list.push(offer);

      } else {
        favoriteOffersByCity.set(offer.city.name, [offer]);
      }
    }

    return ALL_CITIES_NAMES
      .filter((name) => favoriteOffersByCity.has(name))
      .map((cityName) => ({ cityName, cityOffers: favoriteOffersByCity.get(cityName)! }));
  }
);


export const favoriteSelectors = { selectFavoriteIdSet, selectFavoriteOffers };
