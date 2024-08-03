import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import DroneList from './components/DroneList';
import DroneDetails from './components/DroneDetails';
import droneData from './assets/drones.json';
import droneimg from './assets/drones.jpg';


const users = droneData.users;
const drones = droneData.drones;

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [selectedDrone, setSelectedDrone] = useState(null);

  const handleLogin = (username, password) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleDroneClick = (drone) => {
    // If the same drone is clicked, reset selection
    setSelectedDrone(prev => prev?.id === drone.id ? null : drone);
  };

  return (
    <div className='min-h-screen bg-black'>
      <header className="bg-indigo-600 text-white p-4 shadow-md">
        <div className="container mx-auto text-center text-2xl font-bold">Drone Fleet Management</div>
      </header>
      <div className="flex">
        <div className="w-1/4 p-4 bg-slate-600 shadow-md ">
          {authenticated ? (
            <DroneList drones={drones} onSelectDrone={handleDroneClick} />
          ) : (
            <div className="w-full max-w-sm mx-auto">
              <LoginForm onLogin={handleLogin} />
            </div>
          )}
        </div>
        <div className={` w-3/4 p-4 min-h-screen ${selectedDrone ? 'bg-gray-50' : 'bg-cover bg-center bg-[url("./assets/drones.jpg")]'}`}>
          {selectedDrone ? (
            <DroneDetails drone={selectedDrone} />
          ) : (
            <p className="text-center text-black">Select a drone to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
