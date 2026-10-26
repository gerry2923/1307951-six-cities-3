import { useSelector } from 'react-redux';
import { selectFavoritesByCityName } from '../../store/favorites/favorites-selectors';
import { useEffect } from 'react';
import { useActionCreators, useAppSelector } from '../../store/hooks';
import { selectRequestStatus } from '../../store/favorites/favorites-slice';
import { offersActions } from '../../store/offers/offers-slice';
import { RequestStatus } from '../const';
import NotFound from '../not-found/notFound';
import FavoriteCity from './favorite-city';
import Spinner from '../spinner/spinner';


function Favorites(): JSX.Element {
  const favorites = useSelector(selectFavoritesByCityName);
  const { fetchAllOffers } = useActionCreators(offersActions);
  const status = useAppSelector(selectRequestStatus);

  useEffect(() => {
    fetchAllOffers();
  }, [fetchAllOffers]);


  if (status === RequestStatus.Loading) {
    return <Spinner />; // или null
  }

  if (status === RequestStatus.Failed) {
    return <NotFound type='other' />;
  }

  return (
    <main className='page__main page__main--favorites'>
      <div className='page__favorites-container container'>
        <section className='favorites'>
          <h1 className='favorites__title'>Saved listing</h1>
          <ul className='favorites__list'>

            {
              favorites.map((favorite) =>
                (
                  <FavoriteCity
                    key={favorite.cityName}
                    cityFavorites={favorite}
                  />
                ))
            }
          </ul>
        </section>
      </div>
    </main>

  );
}


export default Favorites;
