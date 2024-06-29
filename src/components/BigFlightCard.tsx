import { Flight } from "../types"

type BigFlightCardProps = {
  flight: Flight,
  flightLeg: number
}

export default function BigFlightCard({flight, flightLeg}:BigFlightCardProps) {
  return(
    <div className="big-flight-card block w-full px-5 py-4 border border-white/20 bg-white/5 rounded mb-3 last:mb-0">
      <p className="text-lg text-center mb-3">{flight.ident}</p>
      <div className="flex justify-between items-center mb-3">
        <div>
          <p className="text-lg">{flight.origin}</p>
          <p>{flight.readable_departure}</p>
        </div>
        <div className="h-1 bg-white w-full mx-8"></div>
        <div>
          <p className="text-lg">{flight.destination}</p>
          <p>{flight.readable_arrival}</p>
        </div>
      </div>
      <p className="text-xs text-center uppercase mb-3">Flight {flightLeg}</p>
    </div>
  )
}