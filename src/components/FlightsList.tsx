import SmallFlightCard from "./SmallFlightCard"
import { Flight } from "../types"

type FlightsProps = {
  nextFlights: Flight[],
  hasAircraftSelected: boolean,
  hasRotation: boolean,
  setRotation: React.Dispatch<React.SetStateAction<Flight[]>>,
  resetRotation: () => void,
}

export default function Flights({nextFlights, hasAircraftSelected, hasRotation, setRotation, resetRotation}:FlightsProps) {
  return(
    <div className="flex flex-col w-3/12 pl-1">
      <h2 className="text-center mb-4 text-lg">
        {hasRotation ? "Choose Next Flight" : "All Flights"}
      </h2>
      <div className="border border-white/20 rounded h-90 grow p-3 overflow-auto">
        {nextFlights.length > 0 ? (
          nextFlights.map((flight, i) => (
            <SmallFlightCard
              key={i}
              flight={flight}
              hasAircraftSelected={hasAircraftSelected}
              setRotation={setRotation}
            />
          ))
        ) : (
          <div className="flex flex-col justify-center items-center h-full w-full">
            <h2 className="text-center text-gray-500 mb-3">No remaining viable flights.</h2>
            <button 
              className="block text-xxs uppercase border border-white/20 bg-white/5 hover:bg-white/10 px-4 py-2 rounded transition-all"
              onClick={resetRotation}>Reset rotation</button>
          </div>
        )}
      </div>
    </div>
  )
}