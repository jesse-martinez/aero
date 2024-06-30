import { useState } from "react"
import { motion } from "framer-motion"
import { clsx } from "clsx"
import { Flight } from "../types"

type SmallFlightCardProps = {
  flight: Flight,
  hasAircraftSelected: boolean,
  setRotation: React.Dispatch<React.SetStateAction<Flight[]>>,
}

export default function SmallFlightCard({flight, hasAircraftSelected, setRotation}: SmallFlightCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const addFlight = (flight: Flight) => {
    setRotation((prevRotation: Flight[]) => [...prevRotation, flight]);
  };
  
  return(
    <button 
      className={clsx(
        "small-flight-card px-4 py-3 border border-white/20 bg-white/5 hover:opacity-100 opacity-50 w-full rounded mb-3 last:mb-0 transition-all", 
        {"pointer-events-none" : !hasAircraftSelected}
      )}
      onClick={() =>  addFlight(flight)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between overflow-hidden">
        <p className="text mb-3">{flight.ident}</p>
        <motion.p
          initial={{ x: 10, opacity: 0 }}
          animate={isHovered ? { x: 0, opacity: 1 } : { x: 10, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.075, 0.82, 0.165, 1] }}
          className="toggle-text text-xxs uppercase origin-center"
        >
          Add flight +
        </motion.p>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-lg">{flight.origin}</p>
          <p>{flight.readable_departure}</p>
        </div>
        <div>
          <p className="text-lg">{flight.destination}</p>
          <p>{flight.readable_arrival}</p>
        </div>
      </div>
    </button>
  );
}
