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
  const [loading, setLoading] = useState(true);

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
    } finally {
      setLoading(false);
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

  const removeLastFlightInRotation = () => {
    setRotation(prevRotation => prevRotation.slice(0, -1));
  };

  useEffect(() => {
    fetchAircrafts();
    fetchFlights();
  }, []);

  useEffect(() => {
    if(rotation.length === 0) {
      setNextFlights(allFlights);
    }
    else {
      updateNextFlights();
    }
  }, [rotation])

  return (
    <>
      <Nav />
      <div className="container flex justify-between mx-auto py-8 grow overflow-hidden">
        {loading ? (
          <div className="h-full w-full flex justify-center items-center">
            <h2>Loading data...</h2>
          </div>
        ) : (
          <>
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
              removeLastFlightInRotation={removeLastFlightInRotation}
            />
            <FlightsList
              nextFlights={nextFlights}
              hasAircraftSelected={aircraftSelected.length > 0}
              hasRotation={rotation.length > 0}
              setRotation={setRotation}
              resetRotation={resetRotation}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App
