import { Flight } from "../types"

type UtilizationBarProps = {
  rotation: Flight[]
}

export default function UtilizationBar({rotation}:UtilizationBarProps) {
  return(
    <div className="px-3 py-2 bg-white/5 border-white/20 border rounded rounded-t-none left-0 bottom-0 w-full z-10 ">
      <div className="timeline flex justify-between items-center mb-1">
        <p className="text-micro">00:00</p>
        <p className="text-micro">12:00</p>
        <p className="text-micro">23:59</p>
      </div>
      <div className="colored-timeline h-2 bg-white/20 rounded">

      </div>
    </div>
  )
}