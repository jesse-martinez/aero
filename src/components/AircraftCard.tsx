import { motion } from 'framer-motion'
import { useState } from 'react';

type AircraftCardProps = {
  name: string,
  model: string,
  capacity: number
}

export default function AircraftCard({name, model, capacity}: AircraftCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return(
    <button 
      className="aircraft-card border border-white/20 px-4 py-3 bg-white/5 opacity-50 hover:opacity-100 rounded w-full transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between overflow-hidden mb-4">
        <p className="text-lg uppercase">{name}</p>
        <motion.p
          initial={{ x: 10, opacity: 0 }}
          animate={isHovered ? { x: 0, opacity: 1 } : { x: 10, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.075, 0.82, 0.165, 1] }}
          className="toggle-text text-xxs uppercase origin-center"
        >
          Select flight +
        </motion.p>
      </div>
      <div className="flex justify-between">
        <div className="text-left">
          <p className="text-xs uppercase">Model {model}</p>
          <p className="text-xs uppercase">Capacity {capacity}</p>
        </div>
        <p className="text-lg">54%</p>
      </div>
    </button>
  )
}