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
  const [utilPercentage, setUtilPercentage] = useState(0);

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

      data.sort((a:Flight, b:Flight) => a.departuretime - b.departuretime);

      setAllFlights(data);
      setNextFlights(data);
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };

  const resetRotation = () => {
    setRotation([]);
    setNextFlights(allFlights);
    setUtilPercentage(0);
  }

  const updateNextFlights = () => {
  
    const lastFlight = rotation[rotation.length - 1];
    const endTime = lastFlight.arrivaltime + 20 * 60;
    const midnightTime = 24 * 3600;

    const compatibleFlights = allFlights.filter(flight => {
      return (
        flight.departuretime >= endTime &&
        flight.origin === lastFlight.destination &&
        flight.arrivaltime <= midnightTime
      );
    });
  
    setNextFlights(compatibleFlights);
  };

  useEffect(() => {
    fetchAircrafts();
    fetchFlights();
  }, []);

  useEffect(() => {
    if(rotation.length > 0) {
      updateNextFlights();
    }
  }, [rotation])

  return (
    <>
      <Nav/>
      <div className="container flex justify-between mx-auto py-10 grow overflow-hidden">
        <AircraftSelector 
          aircrafts={aircrafts} 
          aircraftSelected={aircraftSelected}
          setAircraftSelected={setAircraftSelected}
          resetRotation={resetRotation}
          utilPercentage={utilPercentage}
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
