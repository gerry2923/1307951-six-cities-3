import { CityWithIdType } from '../components/const';

// export const CITY: MapCityType = {
//   title: 'Амстердам',
//   lat: 52.37403,
//   lng: 4.88969,
//   zoom: 13,
// };

export const CITIES: CityWithIdType[] = [
  {
    id: 'paris',
    location: { latitude: 48.85341, longitude: 2.3488, zoom: 13, },
    name: 'Paris',
  },
  {
    id: 'cologne',
    location: { latitude: 50.9333300, longitude: 6.9500000, zoom: 13, },
    name: 'Cologne',
  },
  {
    id: 'brussels',
    location: { latitude: 50.85045, longitude: 4.34878, zoom: 13, },
    name: 'Brussels',
  },
  {
    id: 'amsterdam',
    location: { latitude: 52.37403, longitude: 4.88969, zoom: 13, },
    name: 'Amsterdam',
  },
  {
    id: 'Hamburg',
    location: { latitude: 53.57532, longitude: 10.01534, zoom: 13, },
    name: 'Hamburg',
  },
  {
    id: 'Dusseldorf',
    location: { latitude: 51.22172, longitude: 6.77616, zoom: 13, },
    name: 'Dusseldorf',
  },
] as const;

export type CityName = (typeof CITIES)[number]['name'];
