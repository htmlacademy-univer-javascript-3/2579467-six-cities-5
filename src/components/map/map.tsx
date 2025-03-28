import { useEffect, useRef } from 'react';
import { CityMap, Point } from '../../types/types';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { useMap } from './use-map';

type MapProps = {
  city: CityMap;
  points: Point[];
  selectedPoint: Point | null;
};

const defaultMarker = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

const currentMarker = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

export const Map = ({city, points, selectedPoint}: MapProps) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if(map) {
      points.forEach((point) => {
        leaflet.marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        }, {
          icon: (selectedPoint !== null &&
            point.title === selectedPoint.title) ?
            currentMarker : defaultMarker,
        }).addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <div style={{height: '700px'}}
      ref={mapRef}
    >
    </div>
  );
};
