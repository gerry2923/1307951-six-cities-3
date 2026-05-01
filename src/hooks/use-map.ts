import leaflet, { Map as LefletMap } from 'leaflet';
import { useState, useEffect, useRef} from 'react';
import { MapRefType, TILE_LAYER_URL_PATTERN, TILE_LAYER_ATTRIBUTION } from '../components/const';
// import { CITIES } from '../mocks/city';

const useMap = ({mapRef, city}: MapRefType): LefletMap | null => {
  const [map, setMap] = useState <LefletMap | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current && city) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
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
