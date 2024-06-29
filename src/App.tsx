import { useState, useEffect } from "react"
import Nav from "./components/Nav"
import AircraftSelector from "./components/AircraftSelector"
import Rotation from "./components/Rotation"
import FlightsList from "./components/FlightsList"
import { Aircraft, Flight } from "./types"


function App() {
  const [aircrafts, setAircrafts] = useState<Aircraft[]>([]);
  const [allFlights, setAllFlights] = useState<Flight[]>([]);
  const [aircraftSelected, setAircraftSelected] = useState('');
  const [rotation, setRotation] = useState<Flight[]>([]);
  const [nextFlights, setNextFlights] = useState<Flight[]>([]); 

  const fetchAircrafts = async () => {
    try {
      const response = await fetch("https://recruiting-assessment.alphasights.com/api/aircrafts");
      const data = await response.json();
      setAircrafts(data);
    } catch (error) {
      console.error("Error fetching aircrafts:", error);
    }
  };

  const fetchFlights = async () => {
    try {
      const response = await fetch("https://recruiting-assessment.alphasights.com/api/flights");
      const data = await response.json();
      setAllFlights(data);
      setNextFlights(data);
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };

  const resetRotation = () => {
    setRotation([]);
    setNextFlights(allFlights);
  }

  useEffect(() => {
    fetchAircrafts();
    fetchFlights();
  }, []);

  return (
    <>
      <Nav/>
      <div className="container flex justify-between mx-auto py-10 grow overflow-hidden">
        <AircraftSelector 
          aircrafts={aircrafts} 
          aircraftSelected={aircraftSelected}
          setAircraftSelected={setAircraftSelected}
          resetRotation={resetRotation}
        />
        <Rotation
          aircraftSelected={aircraftSelected}
          rotation={rotation}
        />
        <FlightsList 
          nextFlights={nextFlights}
          aircraftSelected={aircraftSelected}
          rotation={rotation}
          setRotation={setRotation}
        />
      </div>
    </>
  )
}

export default App
