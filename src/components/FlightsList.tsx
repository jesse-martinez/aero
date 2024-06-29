import SmallFlightCard from "./SmallFlightCard"
import { Flight } from "../types"

type FlightsProps = {
  flights: Flight[],
  aircraftSelected: string,
  rotation: Flight[],
  setRotation: (newRotation:Flight[]) => void
}

export default function Flights({flights, aircraftSelected, rotation, setRotation}:FlightsProps) {

  return(
    <div className="flex flex-col w-3/12 pl-1">
      <h2 className="text-center mb-4 text-lg">All Flights</h2>
      <div className="border border-white/20 rounded grow p-3 overflow-auto">
        {flights.map((flight, i) => (
          <SmallFlightCard 
            key={i}
            flight={flight}
            aircraftSelected={aircraftSelected}
            rotation={rotation}
            setRotation={setRotation}
          />
        ))}
      </div>
    </div>
  )
}