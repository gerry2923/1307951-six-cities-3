import React from 'react';
import { TOffer } from '../types';
import OfferCard from './offer-card';

type TOffersList = {
  offers: TOffers;
  onActiveOfferChange?: (offer: TOffer | null) => void;
};

type TOffers = TOffer[] ;

function OfferList({ offers, onActiveOfferChange }: TOffersList): JSX.Element {

  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onOfferHover={onActiveOfferChange}
        />
      ))}
    </>
  );
}

export default React.memo(OfferList);
