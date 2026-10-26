import { TFavoritesByCity } from '../../pages/favorites-screen/favorites-types';
import FavoriteCard from './favorite-card';

function FavoriteCity({ cityFavorites }: { cityFavorites: TFavoritesByCity }): JSX.Element {
  const { cityName: cityName, cityOffers } = cityFavorites;

  return (
    <li className='favorites__locations-items'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <a className='locations__item-link' href='#'>
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className='favorites__places'>
        {cityOffers.map((offer) => <FavoriteCard key={offer.id} offer={offer} />)}
      </div>
    </li>
  );
}

export default FavoriteCity;
