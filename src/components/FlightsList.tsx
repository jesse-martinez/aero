import SmallFlightCard from "./SmallFlightCard"
import { Flight } from "../types"

type FlightsProps = {
  nextFlights: Flight[],
  aircraftSelected: string,
  rotation: Flight[],
  setRotation: (newRotation:Flight[]) => void,
}

export default function Flights({nextFlights, aircraftSelected, rotation, setRotation}:FlightsProps) {
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
          <div className="flex justify-center items-center h-full w-full">
            <h2 className="text-center text-gray-500">No possible flights.</h2>
          </div>
        )}
      </div>
    </div>
  )
}