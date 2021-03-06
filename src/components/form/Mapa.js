import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Mapa(props) {

  return (
    <div id="map">
      <MapContainer center={[props.coordenadaX ||  (-5.1386323), props.coordenadaY || (-39.7284444)]}
        zoom={8}
        maxZoom={13}
        minZoom={8}>
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[-5.1386323, -39.7284444]}>
          <Popup>
            {props.nome}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Mapa;
