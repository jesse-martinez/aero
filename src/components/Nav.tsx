import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { ChevronRightIcon } from "@heroicons/react/24/solid"

export default function Nav() {
  return(
    <nav className="grid grid-cols-[auto_1fr_auto] items-center w-full py-2 px-3">
      <h1 className="text-lg justify-self-start">Wingbeat</h1>
      <div className="relative flex items-center justify-self-center right-10">
        <button className="hover:bg-white/10 transition-all p-1 mr-3 aspect-square h-6 rounded-full"><ChevronLeftIcon/></button>
        <h2 className="whitespace-nowrap">27 June 2024</h2>
        <button className="hover:bg-white/10 transition-all p-1 ml-3 aspect-square h-6 rounded-full"><ChevronRightIcon/></button>
      </div>
    </nav>
  )
}