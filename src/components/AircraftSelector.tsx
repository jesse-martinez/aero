import AircraftCard from "./AircraftCard"

type AircraftSelectorProps = {
  aircrafts: Aircraft[],
  aircraftSelected: string,
  setAircraftSelected: (aircraft:string) => void
}

type Aircraft = {
  ident: string,
  type: string,
  economySeats: number
};

export default function AircraftSelector({aircrafts, aircraftSelected, setAircraftSelected}:AircraftSelectorProps) {

  return(
    <div className="flex flex-col w-3/12 pr-1">
      <h2 className="text-center mb-4 text-lg">Aircrafts</h2>
      <div className="border border-white/20 rounded grow p-3 overflow-auto">
        {aircrafts.map((aircraft, i) => (
          <AircraftCard 
            key={i}
            name={aircraft.ident}
            model={aircraft.type}
            capacity={aircraft.economySeats}
            aircraftSelected={aircraftSelected}
            setAircraftSelected={setAircraftSelected}
          />
        ))}
      </div>
    </div>
  )
}