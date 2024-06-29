import { motion } from "framer-motion"
import { Flight } from "../types"

type RotationProps = {
  aircraftSelected: string,
  rotation: Flight[]
}

export default function Rotation({aircraftSelected, rotation}:RotationProps) {

  const hasRotation = () => {
    return rotation.length > 0;
  }

  return(
    <div className="flex flex-col w-6/12 px-1">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: aircraftSelected ? 1 : 0 }}
        transition={{
          opacity: {
            duration: aircraftSelected ? 0.25 : 0,
            ease: [0.075, 0.82, 0.165, 1]
          },
        }}
        className="text-center mb-4 text-lg overflow-hidden">Rotation for Aircraft {aircraftSelected}
      </motion.h2>
      <div className="border border-white/20 rounded grow p-3 overflow-auto">
        {!aircraftSelected && (
          <div className="flex items-center justify-center h-full"><h2>Select an aircraft</h2></div>
        )}
        {aircraftSelected && !hasRotation() && (
          <div className="flex items-center justify-center h-full"><h2>Select an initial flight</h2></div>
        )}
        {hasRotation() && (
          <div className=""></div>
        )}
      </div>
    </div>
  )
}