import Nav from "./components/Nav"
import AircraftSelector from "./components/AircraftSelector"
import Rotation from "./components/Rotation"
import FlightsList from "./components/FlightsList"

function App() {

  return (
    <>
      <Nav/>
      <div className="container flex justify-between mx-auto py-10 grow overflow-hidden">
        <AircraftSelector/>
        <Rotation/>
        <FlightsList/>
      </div>
    </>
  )
}

export default App
