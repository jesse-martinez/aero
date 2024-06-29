import SmallFlightCard from "./SmallFlightCard"
import { Flight } from "../types"

type FlightsProps = {
  nextFlights: Flight[],
  aircraftSelected: string,
  rotation: Flight[],
  setRotation: (newRotation:Flight[]) => void,
  resetRotation: () => void,
}

export default function Flights({nextFlights, aircraftSelected, rotation, setRotation, resetRotation}:FlightsProps) {
  const hasRotation = () => {
    return rotation.length;
  }

  return(
    <div className="flex flex-col w-3/12 pl-1">
      <h2 className="text-center mb-4 text-lg">
        {hasRotation() ? "Choose Next Flight" : "All Flights"}
      </h2>
      <div className="border border-white/20 rounded h-90 grow p-3 overflow-auto">
        {nextFlights.length > 0 ? (
          nextFlights.map((flight, i) => (
            <SmallFlightCard
              key={i}
              flight={flight}
              aircraftSelected={aircraftSelected}
              rotation={rotation}
              setRotation={setRotation}
            />
          ))
        ) : (
          <div className="flex flex-col justify-center items-center h-full w-full">
            <h2 className="text-center text-gray-500 mb-3">No remaining viable flights.</h2>
            <button 
              className="block text-xxs uppercase border border-white/20 bg-white/5 hover:bg-white/10 px-4 py-2 rounded transition-all"
              onClick={()=> resetRotation()}>Reset rotation</button>
          </div>
        )}
      </div>
    </div>
  )
}