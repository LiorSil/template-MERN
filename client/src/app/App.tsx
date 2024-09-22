import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/About"
import Contacts from "./routes/Contacts"


const App = () => {
  const location = useLocation(); // Added to get current location
  return (
    <Routes location={location} key={location.pathname}>

        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
        
      

  )
}

export default App
