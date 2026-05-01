// import { useState } from 'react';
import { Logo } from '../../components/logo/logo.tsx';
// import { CityWithIdType, OfferType } from '../../components/const.ts';
// import { CardList } from '../../components/cards/card-list.tsx';

// import { NumberOfOffers } from '../../components/const.ts';
// import { CITY } from '../../mocks/city.ts';

// import { Map } from '../../components/map/map.tsx';
import { useDocumentTitle } from '../../hooks/use-document-title.ts';

import { useAppSelector } from '../../hooks/store.ts';
// import { useDispatch } from 'react-redux';
import { LocationTabs } from '../../components/location-tabs/locationTabs.tsx';
// import { selectCity, selectOffers } from '../../store/selectors_/selectors_.ts';
import { offersSelectors } from '../../store/slices/offers.ts';
// import { CITIES } from '../../mocks/city.ts';
// import { SortingOptions } from '../../components/sorting-options/sortingOptions.tsx';
// import { SortOption } from '../../components/sorting-options/const.ts';
import { CityPlaces } from '../../components/city-places/cityPlaces.tsx';
import { CityPlacesEmpty } from '../../components/city-places/city-places-empty.tsx';


// type MainType = {
//   offers: OfferType[];
// };

// const Main = ({ offers }: MainType): JSX.Element => {
const Main = (): JSX.Element => {
  useDocumentTitle('Main page');

  // импорт офферов из хранилища
  // !!! РЕАЛИЗАЦИЯ: при нажатии на таб, нужно изменить значение cureentOffers в зависимости от таба !!!
  const offers = useAppSelector(offersSelectors.offers);
  const isEmpty = offers.length === 0;
  // const isEmpty = true;

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
          <div className={`cities__places-container container ${isEmpty ? ' cities__places-container--empty ' : ''}`} >
            {isEmpty ? <CityPlacesEmpty /> : <CityPlaces />}
          </div>
        </div>


      </main>
    </div>
  );
};

export { Main };
