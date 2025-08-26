import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserLayot from './components/Layout/UserLayot'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayot/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App