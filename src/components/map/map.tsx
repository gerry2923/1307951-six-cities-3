import { useEffect, useRef } from 'react';
import { TCity, TOffer } from '../types';
import leaflet from 'leaflet';


import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { URL_MARKER_ACTIVE, URL_MARKER_DEFAULT } from '../const';

const defaultMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 20],
});

const activeMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [27, 39],
  iconAnchor: [20, 20],
});

type TMap = {
  city: TCity;
  offers: TOffer[];
  activeOfferId?: string | null;
  className: string;
  isFirstActive?: boolean;
}


function Map({
  city,
  offers,
  activeOfferId,
  className,
  isFirstActive = false
}: TMap): JSX.Element {

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<leaflet.Marker[]>([]);
  if (isFirstActive) {
    activeOfferId = activeOfferId ?? offers[0].id;
  }

  const map = useMap(
    {
      location: city?.location ?? null,
      containerRef: mapContainerRef,
    });

  useEffect(() => {
    if (!map) {
      return undefined;
    }

    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    markersRef.current = offers.map((offer) =>
      leaflet
        .marker(
          [offer.location.latitude, offer.location.longitude],
          {
            icon: offer.id === activeOfferId ? activeMarkerIcon : defaultMarkerIcon,
          }
        )
        .addTo(map)
    );

    return () => {
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
    };
  }, [map, offers, activeOfferId]);

  useEffect(() => {
    if (!map) {
      return;
    }

    map.setView(
      [city.location.latitude, city.location.longitude],
      city.location.zoom
    );
  }, [map, city.location.latitude, city.location.longitude, city.location.zoom]);


  return (<section className={`${className} map `} ref={mapContainerRef} />);
}

export default Map;
