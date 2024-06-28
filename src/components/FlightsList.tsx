import SmallFlightCard from "./SmallFlightCard"
import { Flight } from '../types'

type FlightsProps = {
  flights: Flight[],
  aircraftSelected: string
}

export default function Flights({flights, aircraftSelected}:FlightsProps) {

  return(
    <div className="flex flex-col w-3/12 pl-1">
      <h2 className="text-center mb-4 text-lg">All Flights</h2>
      <div className="border border-white/20 rounded grow p-3 overflow-auto">
        {flights.map((flight, i) => (
          <SmallFlightCard 
            key={i}
            flight={flight}
            aircraftSelected={aircraftSelected}
          />
        ))}
      </div>
    </div>
  )
}