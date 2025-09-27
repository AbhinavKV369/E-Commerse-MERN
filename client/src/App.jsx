import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

// Layouts
import UserLayout from "./components/Layout/UserLayout";
import AdminLayout from "./components/Layout/AdminLayout";

import ScrollToTop from "./components/Common/ScrollToTop.jsx";


// Home and general pages
import Home from "./pages/Home";
import CollectionsPage from "./pages/CollectionsPage";
import ProductDetails from "./components/Products/ProductDetails";
import CheckoutPage from "./pages/CheckoutPage";
import NotFound from "./pages/NotFound";

// Profile pages
import ProfilePage from "./pages/ProfilePage";
import Orders from "./components/Profile/Orders";
import Addresses from "./components/Profile/Addresses";
import PaymentMethods from "./components/Profile/PaymentMethods";
import Notification from "./components/Profile/Notification";
import Security from "./components/Profile/Security";

// Auth pages
import Login from "./pages/Login";
import Register from "./pages/Register";

// Admin pages
import Dashboard from "./components/Admin/Dashboard";
import UserOrders from "./components/Admin/UserOrders";
import ProductManagement from "./components/Admin/ProductManagement.jsx";
import Users from "./components/Admin/Users";
import AdminNotifications from "./components/Admin/AdminNotification";
import UserChats from "./components/Admin/UserChats";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* Toaster for Notifications */}
        <Toaster position="top-right" />

        <ScrollToTop />
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route
              path="collections/:collection"
              element={<CollectionsPage />}
            />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="checkout" element={<CheckoutPage />} />

            {/* Profile Routes */}
            <Route path="profile" element={<ProfilePage />}>
              <Route index element={<Navigate to="orders" replace />} />
              <Route path="orders" element={<Orders />} />
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
            <Route path="users" element={<Users />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="orders" element={<UserOrders />} />
            <Route path="notifications" element={<AdminNotifications />} />
            <Route path="chats" element={<UserChats />} />
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
