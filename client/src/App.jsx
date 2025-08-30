import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserLayot from './components/Layout/UserLayot'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayot/>} >
         <Route index element={<Home />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App