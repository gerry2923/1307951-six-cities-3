import leaflet, { Map as LefletMap } from 'leaflet';
import { useState, useEffect, useRef} from 'react';
import { MapRefType, TILE_LAYER_URL_PATTERN, TILE_LAYER_ATTRIBUTION, CityWithIdType } from '../components/const';
import { CITIES } from '../mocks/city';

const useMap = ({mapRef, city}: MapRefType): LefletMap | null => {
  const [map, setMap] = useState <LefletMap | null>(null);
  const isRenderedRef = useRef(false);

  const cityObject : CityWithIdType|undefined = CITIES.find((citiObj) => citiObj.name === city);


  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current && cityObject) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: cityObject.location.latitude,
          lng: cityObject.location.longitude,
        },
        zoom: cityObject.location.zoom,
      });

      leaflet
        .tileLayer(
          TILE_LAYER_URL_PATTERN,
          {
            attribution: TILE_LAYER_ATTRIBUTION,
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;

    }
  }, [mapRef, city]);

  return map;

};

export { useMap };
