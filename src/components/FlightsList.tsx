import SmallFlightCard from "./SmallFlightCard"

type FlightsProps = {
  flights: Flight[]
}

type Flight = {
  ident: string,
  origin: string,
  destination: string,
  readable_departure: string,
  readable_arrival: string,
  departuretime: number,
  arrivaltime: number
}

export default function Flights({flights}:FlightsProps) {

  return(
    <div className="flex flex-col w-3/12 pl-1">
      <h2 className="text-center mb-4 text-lg">All Flights</h2>
      <div className="border border-white/20 rounded grow p-3 overflow-auto">
        {flights.map((flight, i) => (
          <SmallFlightCard 
            key={i}
            flightName={flight.ident} 
            origin={flight.origin} 
            destination={flight.destination}
            readableDepartingTime={flight.readable_departure}
            readableArrivalTime={flight.readable_arrival}
            departingTime={flight.departuretime}
            arrivalTime={flight.arrivaltime}
          />
        ))}
      </div>
    </div>
  )
}