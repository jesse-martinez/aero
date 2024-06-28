import Nav from "./components/Nav"
import AircraftSelector from "./components/AircraftSelector"
import Rotation from "./components/Rotation"
import FlightsList from "./components/FlightsList"

import { useState, useEffect } from 'react'

function App() {
  const [aircrafts, setAircrafts] = useState([]);
  const [flights, setFlights] = useState([]);

  const [aircraftSelected, setAircraftSelected] = useState('');

  const [currentRotation, setCurrentRotation] = useState([]);
  const [nextFlights, setNextFlights] = useState([]);

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
        />
        <FlightsList flights={flights}/>
      </div>
    </>
  )
}

export default App
