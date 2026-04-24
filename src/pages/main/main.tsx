import { useState } from 'react';
import { Logo } from '../../components/logo/logo.tsx';
import { OfferType } from '../../components/const.ts';
import { CardList } from '../../components/cards/card-list.tsx';

import { NumberOfOffers } from '../../components/const.ts';
// import { CITY } from '../../mocks/city.ts';

import { Map } from '../../components/map/map.tsx';
import { useDocumentTitle } from '../../hooks/use-document-title.ts';

import { useAppSelector } from '../../hooks/store.ts';
// import { useDispatch } from 'react-redux';
import { LocationTabs } from '../../components/location-tabs/locationTabs.tsx';


// type MainType = {
//   offers: OfferType[];
// };

// const Main = ({ offers }: MainType): JSX.Element => {
const Main = (): JSX.Element => {
  useDocumentTitle('Main page');

  // импорт офферов из хранилища
  // !!! РЕАЛИЗАЦИЯ: при нажатии на таб, нужно изменить значение cureentOffers в зависимости от таба !!!
  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);
  // const dispatch = useDispatch();

  const currentOffers = offers.filter((offer) => offer.city.name === currentCity);

  const isEmpty = offers.length === 0;

  // перерисовка карты и выделение соответствующего пина при наведении на один из офферов
  const [selectedPoint, setSelectedPoint] = useState('');

  const handleCardHover = (activeOffer: OfferType | undefined) => {
    const currentOffer = currentOffers.find((offer: OfferType) => offer.id === activeOffer?.id);

    if (currentOffer) {
      setSelectedPoint(currentOffer.id);
    }

  };

  return (
    <div className={`page page--gray page--main ${isEmpty ? 'page__main--index-empty' : ''}`}>
      <Logo />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>

        <div className='tabs'>
          <section className='locations container'>
            <LocationTabs />
          </section>
        </div>

        <div className='cities'>
          <div className='cities__places-container container'>

            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>{NumberOfOffers.offers} places to stay in Amsterdam</b>

              <form className='places__sorting' action='#' method='get'>
                <span className='places__sorting-caption'>Sort by</span>
                <span className='places__sorting-type' tabIndex={0}>
                  Popular
                  <svg className='places__sorting-arrow' width={7} height={4}>
                    <use xlinkHref='#icon-arrow-select' />
                  </svg>
                </span>

                <ul className='places__options places__options--custom places__options--opened'>
                  <li
                    className='places__option places__option--active'
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className='places__option' tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className='places__option' tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className='places__option' tabIndex={0}>
                    Top rated first
                  </li>
                </ul>

              </form>

              {offers && offers.length > 0 &&
              <CardList
                offers={currentOffers}
                onCardHover={handleCardHover}
              />}

            </section>

            <div className='cities__right-section'>
              <Map
                city={currentCity}
                offers={currentOffers}
                activeOfferId={selectedPoint}
                onMarkerHover={handleCardHover}
              />

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export { Main };
