import { LocationTab } from './locationTab';
import { CITIES } from '../../mocks/city';

const LocationTabs = (): JSX.Element => (
  <ul className='locations__list tabs__list'>
    {CITIES.map((city) =>(
      <LocationTab
        key={city.id}
        cityName={city.name}
      />
    ))}
  </ul>
);

export { LocationTabs };
