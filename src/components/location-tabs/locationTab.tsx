import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store.ts';
import { useDispatch } from 'react-redux';
import { AppRoute } from '../const';
import { offersAction, offersSelectors } from '../../store/slices/offers.ts';
// import { selectCity } from '../../store/selectors_/selectors_.ts';
// import { setCity } from '../../store/reducer.ts';
// import { setCity } from '../../store/action._ts';

type LocationTabType = {
  cityName: string;
};

const LocationTab = ({ cityName }: LocationTabType): JSX.Element => {
  // импорт офферов из хранилища
  // const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector(offersSelectors.city);
  const dispatch = useDispatch();

  // const currentOffers = offers.filter((offer) => offer.city.name === currentCity);

  // const isEmpty = offers.length === 0;

  return (
    <li className='locations__item'>
      <Link
        className={`locations__item-link tabs__item ${currentCity === cityName ? 'tabs__item--active' : ''} `}
        onClick={(evt) => {
          evt.preventDefault();
          // dispatch(setCity(cityName));
          dispatch(offersAction.setCity(cityName));
        }}
        to={AppRoute.Main}
      >
        <span>{cityName}</span>
      </Link>
    </li>
  );
};

export { LocationTab };
