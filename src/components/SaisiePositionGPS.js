import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import { useFormikContext } from 'formik';
import { useEffect, useRef, useState } from 'react';

import L from 'leaflet';
import redMarker from 'leaflet-color-markers/img/marker-icon-red.png';
import shadow from 'leaflet-color-markers/img/marker-shadow.png';

const redIcon = new L.Icon({
  iconUrl: redMarker,
  shadowUrl: shadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

/* ---------- Marker draggable + sync Formik ---------- */
function DraggableMarker({ name, defaultPosition }) {
  const { values, setFieldValue } = useFormikContext();
  const markerRef = useRef(null);
  const map = useMap();

  const formikPosition =
    values[name]?.lat != null && values[name]?.lng != null
      ? [values[name].lat, values[name].lng]
      : null;

  const [position, setPosition] = useState(
    formikPosition || defaultPosition
  );

  /* Sync si Formik change (edit, load API, reset) */
  useEffect(() => {
    if (
      formikPosition &&
      (formikPosition[0] !== position[0] ||
        formikPosition[1] !== position[1])
    ) {
      setPosition(formikPosition);
      map.setView(formikPosition, map.getZoom(), { animate: true });
    }
  }, [formikPosition, map]); // ⚠️ PAS position ici

  useMapEvents({
    click(e) {
      const pos = [e.latlng.lat, e.latlng.lng];
      setPosition(pos);
      setFieldValue(`${name}.lat`, pos[0]);
      setFieldValue(`${name}.lng`, pos[1]);
      map.setView(pos, map.getZoom(), { animate: true });
    },
  });

  const eventHandlers = {
    dragend() {
      const marker = markerRef.current;
      if (!marker) return;

      const { lat, lng } = marker.getLatLng();
      const pos = [lat, lng];
      setPosition(pos);
      setFieldValue(`${name}.lat`, lat);
      setFieldValue(`${name}.lng`, lng);
      map.setView(pos, map.getZoom(), { animate: true });
    },
  };

  return (
    <Marker
      draggable
      icon={redIcon}
      position={position}
      ref={markerRef}
      eventHandlers={eventHandlers}
    />
  );
}

/* ---------- Bouton de géolocalisation ---------- */
function LocateButton({ name }) {
  const { setFieldValue } = useFormikContext();
  const map = useMap();

  const locate = () => {
    if (!navigator.geolocation) {
      alert('La géolocalisation n’est pas supportée');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        setFieldValue(`${name}.lat`, latitude);
        setFieldValue(`${name}.lng`, longitude);

        map.setView([latitude, longitude], 15, { animate: true });
      },
      () => alert('Impossible de récupérer votre position')
    );
  };

  return (
    <button
      type="button"
      onClick={locate}
      style={{
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1000,
        background: 'white',
        padding: '6px 10px',
        borderRadius: 4,
        border: '1px solid #ccc',
        cursor: 'pointer',
      }}
    >
      📍 Me localiser
    </button>
  );
}

/* ---------- Composant principal ---------- */
export default function SaisiePositionGPS({
  name, location,
  center = [48.8566, 2.3522],
  zoom = 16,
}) 

{
  console.log('SaisiePositionGPS');
  console.log(name);
  const initialPosition =
    location?.lat != null && location?.lng != null
      ? [location.lat, location.lng]
      : center;
  return (
    <MapContainer
      center={initialPosition}
      zoom={zoom}
      style={{ height: 350, width: '100%', position: 'relative' }}
    >
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocateButton name={name} />
      <DraggableMarker name={name} defaultPosition={center} />
    </MapContainer>
  );
}
