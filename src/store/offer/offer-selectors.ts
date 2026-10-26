import { createSelector } from '@reduxjs/toolkit';
import { selectFavoriteIdSet } from '../favorites/favorites-selectors';
import { offerSelectors } from './offer-slice';

const NEARBY_OFFERS_LENGTH = 3;
export const selectOfferWithFavorites = createSelector(
  [offerSelectors.offer, selectFavoriteIdSet],
  (offer, favoriteSet) =>
    offer ? { ...offer, isFavorite: favoriteSet.has(offer.id) } : null
);

export const selectNearbyOffersWithFavorites = createSelector(
  [offerSelectors.nearbyOffers, selectFavoriteIdSet],
  (offers, favoriteSet) =>
    offers.map((offer) => ({ ...offer, isFavorite: favoriteSet.has(offer.id) })).slice(0,NEARBY_OFFERS_LENGTH)
);
