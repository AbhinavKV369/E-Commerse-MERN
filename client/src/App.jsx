import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
// Main Outlet
import UserLayot from "./components/Layout/UserLayout";
// Home page
import Home from "./pages/Home";
// Profile Page
import Profile from "./pages/Profile";
// Auth pages
import Login from "./pages/Login";
import Register from "./pages/Register";
//Product Details
import ProductDetails from "./components/Products/ProductDetails";

// Profile Outlet components
import Orders from "./components/Profile/Orders";
import Wishlist from "./components/Profile/Wishlist";
import Addresses from "./components/Profile/Addresses";
import PaymentMethods from "./components/Profile/PaymentMethods";
import Notification from "./components/Profile/Notification";
import Security from "./components/Profile/Security";
import Collections from "./pages/Collections";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          {/* Routes with Layout */}
          <Route path="/" element={<UserLayot />}>
            <Route index element={<Home />} />
            <Route path="/collections/:collection" element={<Collections/>} />
            {/* Profile outlet  */}
            <Route path="/profile" element={<Profile />}>
              {/* Profile outlet components */}
              <Route index element={ <Navigate to="orders" replace/>}  />
              <Route path="orders"  element={< Orders />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="addresses" element={<Addresses />} />
              <Route path="payments" element={<PaymentMethods />} />
              <Route path="notifications" element={<Notification />} />
              <Route path="security" element={<Security />} />
            </Route>
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
