/* eslint-disable react/jsx-key */
// Map.js
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, divIcon, point } from "leaflet";

const Map = ({locations}) => {
  const customIcon = new Icon({
    iconUrl: "/images/marker.png",
    iconSize: [38, 38], // size of the icon
  });
  
  return (
    <MapContainer
    center={[48.8566, 2.3522]}
      zoom={13}
      //   center={[0, 0]} // set the initial center of the map
      //   zoom={2} // set the initial zoom level
      //   style={{ height: '300px', width: '100%' }}
    >
      {/* Add a tile layer for the map */}
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

      {/* Map markers */}
      {locations.map((marker) => (
        <Marker position={marker.geocode} icon={customIcon}>
          <Popup>{marker.popUp}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
