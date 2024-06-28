import AircraftCard from "./AircraftCard"
import { Aircraft } from "../types";

type AircraftSelectorProps = {
  aircrafts: Aircraft[],
  aircraftSelected: string,
  setAircraftSelected: (aircraft:string) => void
}

export default function AircraftSelector({aircrafts, aircraftSelected, setAircraftSelected}:AircraftSelectorProps) {

  return(
    <div className="flex flex-col w-3/12 pr-1">
      <h2 className="text-center mb-4 text-lg">Aircrafts</h2>
      <div className="border border-white/20 rounded grow p-3 overflow-auto">
        {aircrafts.map((aircraft, i) => (
          <AircraftCard 
            key={i}
            aircraft={aircraft}
            aircraftSelected={aircraftSelected}
            setAircraftSelected={setAircraftSelected}
          />
        ))}
      </div>
    </div>
  )
}