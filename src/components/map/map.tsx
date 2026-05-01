import { useRef, useEffect } from 'react';
import { useMap } from '../../hooks/use-map';
import leaflet, { LeafletMouseEvent } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT_LOCAL, OfferType, CityWithIdType } from '../const';

type MapType = {
  city: CityWithIdType | undefined;
  offers: OfferType[];
  activeOffer?: OfferType | undefined;
  onMarkerHover?: (activeOffer: OfferType | undefined) => void;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const activeCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT_LOCAL,
  iconSize: [28, 40],
  iconAnchor: [20, 40],
});


const Map = ({ city, offers, activeOffer, onMarkerHover }: MapType): JSX.Element => {

  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap({ mapRef, city });
  // const activeOffer2 = offers.find((offer) => offer.id === activeOfferId);

  const handleMouseOver = (e: LeafletMouseEvent) => {
    const { lat, lng } = e.latlng;

    const newActiveOffer = offers.find((offer) =>
      lat === offer.city.location.latitude &&
      lng === offer.city.location.longitude);

    activeOffer = newActiveOffer;
    onMarkerHover?.(activeOffer);
  };
  // создаем пины
  const createPins = () => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.city.location.latitude,
            lng: offer.city.location.longitude,
          }, {
            icon: activeOffer?.id === offer.id ? activeCustomIcon : defaultCustomIcon,
          })
          .addTo(map).on('mouseover', handleMouseOver);
      });

    }
  };
  // изменяем цвет пинов
  const changeActivPinView = () => {
    if (map) {
      map.eachLayer((layer) => {
        // Ensure the layer is a marker and has coordinates
        if (layer instanceof leaflet.Marker) {
          const latlng = layer.getLatLng();
          if (latlng.lat === activeOffer?.location.latitude && latlng.lng === activeOffer.location.longitude) {
            layer.setIcon(activeCustomIcon);
          } else {
            layer.setIcon(defaultCustomIcon);
          }
        }
      });
    }

  };
  // убираем лишние пины, когда изменяем город
  const resetPins = () => {
    if (map) {
      map.eachLayer((pin) => {
        if (pin instanceof leaflet.Marker) {
          map.removeLayer(pin);
        }
      });
    }
  };

  const isAnyMarkers = () => {
    let hasMarkers = false;
    if (map) {
      map.eachLayer((pin) => {
        if (pin instanceof leaflet.Marker) {
          hasMarkers = true;
        }
      });
    }
    return hasMarkers;
  };


  useEffect(() => {
    if(map) {
      if(isAnyMarkers()) {
        changeActivPinView();
      } else {
        createPins();
      }
    }
  }, [activeOffer, map]);

  useEffect(() => {
    if (city) {
      if(map){
        resetPins();
        createPins();
        map.flyTo([city.location.latitude, city.location.longitude], city?.location.zoom);
      }
    }

  }, [city]);


  return (
    <section
      className='cities__map map'
      ref={mapRef}
    />
  );
};

export { Map };
