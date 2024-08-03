import React from 'react';

const DroneList = ({ drones, onSelectDrone }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Drone Fleet Overview</h2>
      <ul className="space-y-3">
        {drones.map((drone) => (
          <li
            key={drone.id}
            className="p-4 bg-gray-50 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => onSelectDrone(drone)}
          >
            <h3 className="text-lg font-medium text-gray-800">{drone.id}</h3>
            <p className="text-sm text-gray-600">Status: {drone.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DroneList;
