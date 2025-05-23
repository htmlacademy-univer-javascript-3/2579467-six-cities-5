import { useEffect, useRef } from 'react';
import { City, Offer } from '../../types/types';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { useMap } from './use-map';

type MapProps = {
  city: City;
  points: Offer[];
  selectedPoint: Offer | null;
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
      points.forEach((point) => {
        const marker = leaflet.marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        }, {
          icon: (selectedPoint !== null &&
            point.id === selectedPoint.id) ?
            currentMarker : defaultMarker,
        });

        marker.addTo(map);
        markersRef.current.push(marker);

      });

    }
    return () => {
      markersRef.current.forEach((marker) => map?.removeLayer(marker));
      markersRef.current = [];
    };
  }, [map, points, selectedPoint]);


  return (
    <div style={{height: '100%', width: '100%'}}
      ref={mapRef}
    >
    </div>
  );
};
