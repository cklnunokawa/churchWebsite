import { Routes, Route, Link } from 'react-router-dom'
import Home from '/pages/Home'
import About from '/pages/About'
import Donate from '/pages/Donate'

export default function App() {
  return (
    <div className="p-4">
      <nav className="flex gap-4 mb-6 text-blue-600 underline">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/donate">Donate</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </div>
  )
}
