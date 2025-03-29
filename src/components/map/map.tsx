import { useEffect, useRef } from 'react';
import { Point } from '../../types/types';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { useMap } from './use-map';

type MapProps = {
  city: Point;
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
  const markersRef = useRef<leaflet.Marker[]>([]);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if(map) {
      markersRef.current.forEach((marker) => map.removeLayer(marker));
      markersRef.current = [];

      points.forEach((point) => {
        const marker = leaflet.marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        }, {
          icon: (selectedPoint !== null &&
            point.title === selectedPoint.title) ?
            currentMarker : defaultMarker,
        });

        marker.addTo(map);
        markersRef.current.push(marker);

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
