import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Room from './Room'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/room/:roomID" element={<Room />} />
      </Routes>
        </div>
    </>
  )
}

export default App
