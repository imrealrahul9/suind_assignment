import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const UpdateMapCenter = ({ center }) => {
  const map = useMap();
  map.setView(center);
  return null;
};

const DroneDetails = ({ drone }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">{drone.id}</h2>
      <div className="space-y-4">
        <p className="text-lg text-gray-700"><strong>Status:</strong> {drone.status}</p>
        <p className="text-lg text-gray-700"><strong>Flight Hours:</strong> {drone.flight_hours}</p>
        <p className="text-lg text-gray-700"><strong>Battery Status:</strong> {drone.battery_status}</p>
        <p className="text-lg text-gray-700"><strong>Current Mission:</strong> {drone.current_mission}</p>
        
        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Maintenance Logs</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {drone.maintenance_logs.map((log, index) => (
            <li key={index}>
              {log.date}: {log.description} (Technician: {log.technician})
            </li>
          ))}
        </ul>
        
        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Last Known Location</h3>
        <div className="h-96 w-full rounded-lg overflow-hidden">
          <MapContainer center={drone.last_known_location} zoom={13} style={{ height: "100%", width: "100%" }}>
            <UpdateMapCenter center={drone.last_known_location} />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={drone.last_known_location}>
              <Popup>{drone.id}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default DroneDetails;
