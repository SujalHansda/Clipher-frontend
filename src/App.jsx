import "./styles.scss"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Clip from "./pages/Clip"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:clip_id" element={< Clip/>} />
    </Routes>
  )
}