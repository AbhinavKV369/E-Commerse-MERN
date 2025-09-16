import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
// Main Outlet
import UserLayot from "./components/Layout/UserLayout";
// Home page
import Home from "./pages/Home";
// Profile Page
import ProfilePage from "./pages/ProfilePage";
// Collection Pages
import CollectionsPage from "./pages/CollectionsPage";

// Auth pages
import Login from "./pages/Login";
import Register from "./pages/Register";

// Profile Outlet components
import Orders from "./components/Profile/Orders";
import Wishlist from "./components/Profile/Wishlist";
import Addresses from "./components/Profile/Addresses";
import PaymentMethods from "./components/Profile/PaymentMethods";
import Notification from "./components/Profile/Notification";
import Security from "./components/Profile/Security";
import NotFound from "./pages/NotFound";

// Admin Layots and Routes
import AdminLayout from "./components/Layout/AdminLayout";
import Dashboard from "./components/Admin/Dashboard";
import UserOrders from "./components/Admin/UserOrders";

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          {/* Routes with Layout */}
          <Route path="/" element={<UserLayot />}>
            <Route index element={<Home />} />
            <Route
              path="/collections/:collection"
              element={<CollectionsPage />}
            />
            {/* Profile outlet  */}
            <Route path="/profile" element={<ProfilePage />}>
              {/* Profile outlet components */}
              <Route index element={<Navigate to="orders" replace />} />
              <Route path="orders" element={<Orders />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="addresses" element={<Addresses />} />
              <Route path="payments" element={<PaymentMethods />} />
              <Route path="notifications" element={<Notification />} />
              <Route path="security" element={<Security />} />
            </Route>
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path ="orders" element={<UserOrders />} />
          </Route>

          {/* Auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
