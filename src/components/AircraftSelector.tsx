import AircraftCard from "./AircraftCard"

export default function AircraftSelector() {
  const aircrafts = [
    {"ident":"GABCD","type":"A320","economySeats":186,"base":"EGKK"}
  ];

  return(
    <div className="flex flex-col w-3/12 pr-1">
      <h2 className="text-center mb-4 text-lg">Aircrafts</h2>
      <div className="border border-white/20 rounded grow p-3 overflow-auto">
        {aircrafts.map((aircraft) => (
          <AircraftCard 
            name={aircraft.ident}
            model={aircraft.type}
            capacity={aircraft.economySeats}
          />
        ))}
      </div>
    </div>
  )
}