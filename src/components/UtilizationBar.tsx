import { useState, useEffect } from "react";
import { Flight } from "../types";

type UtilizationBarProps = {
  rotation: Flight[];
};

type Bar = {
  left: number;
  width: number;
  color: string;
};

export default function UtilizationBar({ rotation }: UtilizationBarProps) {
  const [bars, setBars] = useState<Bar[]>([]);

  useEffect(() => {

    const calculateBars = () => {
      const bars: Bar[] = [];
      const dayInSeconds = 24 * 60 * 60;

      const createBar = (start: number, end: number, color: string): Bar => {
        const left = (start / dayInSeconds) * 100;
        const width = ((end - start) / dayInSeconds) * 100;
        return { left, width, color };
      };

      rotation.forEach((flight, index) => {
        const { departuretime, arrivaltime } = flight;

        bars.push(createBar(departuretime, arrivaltime, "rgba(21, 128, 61, .8)"));

        if (index < rotation.length - 1) {
          const nextFlight = rotation[index + 1];
          bars.push(createBar(arrivaltime, nextFlight.departuretime, "rgba(76, 29, 149, .6)"));
        }
      });

      setBars(bars);
    };

    calculateBars();
    
  }, [rotation]);

  return (
    <div className="px-3 py-2 bg-white/5 border-white/20 border rounded rounded-t-none left-0 bottom-0 w-full z-10">
      <div className="timeline flex justify-between items-center mb-1">
        <p className="text-micro">00:00</p>
        <p className="text-micro">12:00</p>
        <p className="text-micro">23:59</p>
      </div>
      <div className="colored-timeline h-2 bg-white/20 rounded relative overflow-hidden flex">
        {bars.map((bar, index) => (
          <div
            key={index}
            className="absolute h-full"
            style={{
              left: `${bar.left}%`,
              width: `${bar.width}%`,
              backgroundColor: bar.color,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
