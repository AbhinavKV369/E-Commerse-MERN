import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster } from "sonner"
import UserLayot from './components/Layout/UserLayot'
import Home from './pages/Home'
import ProductDetails from "./components/Products/ProductDetails"
import Login from "./pages/Login"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path='/' element={<UserLayot/>} >
         <Route index element={<Home />} />
         <Route path="/login" element={<Login/>}/>
         <Route path="/product/:productId" element={<ProductDetails/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App