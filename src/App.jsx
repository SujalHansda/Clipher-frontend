import "./styles.scss"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Clip from "./pages/Clip"
import Created from "./pages/Created"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:clip_id" element={< Clip/>} />
      <Route path="/created" element={<Created />} />
    </Routes>
  )
}