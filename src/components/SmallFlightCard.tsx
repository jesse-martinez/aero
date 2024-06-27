import { motion } from 'framer-motion';
import { useState } from 'react';

type SmallFlightCardProps = {
  flightName: string,
  origin: string,
  destination: string,
  readableDepartingTime: string,
  readableArrivalTime: string,
  departingTime: number,
  arrivalTime: number
}

export default function SmallFlightCard({flightName, origin, destination, readableDepartingTime, readableArrivalTime, departingTime, arrivalTime}: SmallFlightCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return(
    <button 
      className="small-flight-card px-4 py-3 border border-white/20 bg-white/5 hover:opacity-100 opacity-50 w-full rounded mb-3 transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between overflow-hidden">
        <p className="text mb-3">{flightName}</p>
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
          <p className="text-lg">{origin}</p>
          <p>{readableDepartingTime}</p>
        </div>
        <div>
          <p className="text-lg">{destination}</p>
          <p>{readableArrivalTime}</p>
        </div>
      </div>
    </button>
  );
}
