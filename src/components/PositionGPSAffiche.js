import { MapContainer, TileLayer, Marker } from 'react-leaflet';

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

export default function PositionGPSAffiche({
  lat,
  lng,
  zoom = 17,
}) 
{
  console.log('PositionGPSAffiche');
console.log(lat);
console.log(lng);
  if (lat == null || lng == null) return null;

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={zoom}
      style={{ height: 300, width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker 
            icon={redIcon}

      position={[lat, lng]} />
    </MapContainer>
  );
}