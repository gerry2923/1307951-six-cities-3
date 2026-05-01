import { Nullable } from 'vitest';
import { OfferType } from '../../components/const';
import { Card } from '../../components/cards/card';
import { useState, useEffect } from 'react';


type CardListType = {
  offers: OfferType[];
  onCardHover?: (activeOffer:OfferType) => void;
};

const CardList = ({offers, onCardHover} : CardListType): JSX.Element =>{

  const [activeOffer, setActiveOffer] = useState<Nullable <OfferType>>(null);

  // в переменную activeOffer сохраняется тот оффер, на который навели курсором мышки
  const handleHover = (offer?: OfferType) => {
    setActiveOffer(offer || null);
  };
  // при изменении активного состояния запускаем метод onCardHover с передачей ему активного оффера
  useEffect(() => {
    if(activeOffer && activeOffer.id){
      onCardHover?.(activeOffer);
    }
  },[activeOffer, onCardHover]);

  return (

    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: OfferType) =>(
        <Card
          key={offer.id}
          offer={offer}
          handleHover={handleHover}
          type={'main'}
        />)
      )}
    </div>);
};

export {CardList};
