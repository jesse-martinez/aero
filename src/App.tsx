import Nav from "./components/Nav"
import AircraftSelector from "./components/AircraftSelector"
import Rotation from "./components/Rotation"
import FlightsList from "./components/FlightsList"
import { Aircraft, Flight } from './types'

import { useState, useEffect } from 'react'

function App() {
  const [aircrafts, setAircrafts] = useState<Aircraft[]>([]);
  const [flights, setFlights] = useState<Flight[]>([]);

  const [aircraftSelected, setAircraftSelected] = useState('');

  const [rotation, setRotation] = useState<Flight[]>([]);
  const [nextFlights, setNextFlights] = useState<Flight[]>([]);

  useEffect(() => {
    fetchAircrafts();
    fetchFlights();
  }, []);

  const fetchAircrafts = async () => {
    const response = await fetch('https://recruiting-assessment.alphasights.com/api/aircrafts');
    const data = await response.json();
    setAircrafts(data);
  };

  const fetchFlights = async () => {
    const response = await fetch('https://recruiting-assessment.alphasights.com/api/flights');
    const data = await response.json();
    setFlights(data);
  };

  return (
    <>
      <Nav/>
      <div className="container flex justify-between mx-auto py-10 grow overflow-hidden">
        <AircraftSelector 
          aircrafts={aircrafts} 
          aircraftSelected={aircraftSelected}
          setAircraftSelected={setAircraftSelected}
        />
        <Rotation
          aircraftSelected={aircraftSelected}
          rotation={rotation}
        />
        <FlightsList 
          flights={flights}
          aircraftSelected={aircraftSelected}
        />
      </div>
    </>
  )
}

export default App
