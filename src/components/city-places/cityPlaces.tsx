import { useState } from 'react';
import { useAppSelector } from '../../hooks/store';
import { offersSelectors } from '../../store/slices/offers';
import { CityWithIdType, OfferType } from '../const';
import { CITIES } from '../../mocks/city';
import { SortOption } from '../sorting-options/const';
import { SortingOptions } from '../sorting-options/sortingOptions';
import { Map } from '../map/map';
import { CardList } from '../cards/card-list';

const CityPlaces = (): JSX.Element => {
  // console.log();

  // 1. Забираем из хранилища выбранный город и все предложения
  const currentCity = useAppSelector(offersSelectors.city);
  const offers = useAppSelector(offersSelectors.offers);
  // 2. оставляем только предложения, которые соответствуют городу
  const currentOffers = offers.filter((offer) => offer.city.name === currentCity);
  // 3. выбираем объект, который соответствует выбранному городу с координатами города
  const currentCityObject: CityWithIdType | undefined = CITIES.find((citiObj) => citiObj.name === currentCity);

  // 4. создаем хук, для отслеживания наведения на карту
  // ТУТ УКАЗАТЬ ТИП SelectedPoint
  const [selectedPoint, setSelectedPoint] = useState({});

  // 5. создаем обработчик события, который принимает активный оффер, т.е. тот, на который навели курсором мыши
  // Если активный оффер присутствует, то изменяем цвет пина на карте
  const handleCardHover = (activeOffer: OfferType | undefined) => {
    const currentOffer = currentOffers.find((offer: OfferType) => offer.id === activeOffer?.id);

    if (currentOffer) {
      setSelectedPoint(currentOffer);
    }
  };
  // 6. создаем хук для сортировки
  const [activeSort, setActiveSort] = useState(SortOption.Popular);

  // 7. создаем переменную для хранения отфильтрованных значений
  let sortedOffers = currentOffers;

  // 8. описываем реализацию фильтров
  if (activeSort === SortOption.PriceLowToHight) {
    sortedOffers = currentOffers.toSorted((a, b) => a.price - b.price);
  }

  if (activeSort === SortOption.PriceHightToLow) {
    sortedOffers = currentOffers.toSorted((a, b) => b.price - a.price);
  }

  if (activeSort === SortOption.TopRatedFirst) {
    sortedOffers = currentOffers.toSorted((a, b) => b.rating - a.rating);
  }


  return (
    <>
      <section className='cities__places places'>
        <h2 className='visually-hidden'>Places</h2>
        <b className='places__found'>{currentOffers.length} places to stay in {currentCity}</b>
        <SortingOptions current={activeSort} setter={setActiveSort} />

        {offers && offers.length > 0 &&

          <CardList
            offers={sortedOffers}
            onCardHover={handleCardHover}
          />}

      </section>

      <div className='cities__right-section'>
        <Map
          city={currentCityObject}
          offers={sortedOffers}
          activeOffer={selectedPoint}
          onMarkerHover={handleCardHover}
        />
      </div>
    </>);
};

export { CityPlaces };
