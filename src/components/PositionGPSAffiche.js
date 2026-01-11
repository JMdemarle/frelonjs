import { MapContainer, TileLayer, Marker } from 'react-leaflet';



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
      <Marker position={[lat, lng]} />
    </MapContainer>
  );
}