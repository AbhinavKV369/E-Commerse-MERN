import React, { useState } from "react";
import {
  HiCheckCircle,
  HiOutlineCreditCard,
  HiReceiptRefund,
  HiTruck,
} from "react-icons/hi";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    houseName: "",
    street: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
    paymentMethod: "",
    addressType: "",
  });

  // Example saved addresses
  const savedAddresses = [
    {
      id: 1,
      label: "Home - Kochi",
      fullName: "John Doe",
      email: "john@example.com",
      houseName: "Green Villa",
      street: "MG Road",
      city: "Kochi",
      district: "Ernakulam",
      state: "Kerala",
      pincode: "682001",
      addressType: "Home",
    },
    {
      id: 2,
      label: "Office - Bangalore",
      fullName: "John Doe",
      email: "john.office@example.com",
      houseName: "Tech Park",
      street: "Whitefield",
      city: "Bangalore",
      district: "Bangalore Urban",
      state: "Karnataka",
      pincode: "560066",
      addressType: "Work",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddressSelect = (e) => {
    const selectedId = e.target.value;
    const address = savedAddresses.find((a) => a.id.toString() === selectedId);
    if (address) setFormData(address);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("🎉 Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-6">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Checkout Form */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-xl">
          <h2 className="flex items-center text-3xl font-extrabold text-gray-900 mb-8 border-b pb-4">
            <HiCheckCircle className="mr-2 text-gray-800" /> Checkout
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Saved Address Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select Saved Address
              </label>
              <select
                onChange={handleAddressSelect}
                className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500">
                <option value="">-- Choose Address --</option>
                {savedAddresses.map((address) => (
                  <option key={address.id} value={address.id}>
                    {address.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Address Type Pills */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address Type
              </label>
              <div className="flex gap-3">
                {["Home", "Work", "Other"].map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() =>
                      setFormData({ ...formData, addressType: type })
                    }
                    className={`px-4 py-2 rounded-xl border font-medium transition ${
                      formData.addressType === type
                        ? "bg-gray-800 text-white border-gray-900"
                        : "bg-white text-gray-700 border-gray-300 hover:border-gray-800"
                    }`}>
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* Address Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  House Name
                </label>
                <input
                  type="text"
                  name="houseName"
                  value={formData.houseName}
                  onChange={handleChange}
                  placeholder="Green Villa"
                  className="w-full mt-2 p-3 border rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Street
                </label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  placeholder="MG Road"
                  className="w-full mt-2 p-3 border rounded-xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Kochi"
                  className="w-full mt-2 p-3 border rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  District
                </label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  placeholder="Ernakulam"
                  className="w-full mt-2 p-3 border rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-xl">
                  <option value="">Select State</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Delhi">Delhi</option>
                </select>
              </div>
            </div>

            {/* Pincode */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Pincode
              </label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="682001"
                className="w-full mt-2 p-3 border rounded-xl"
              />
            </div>

            {/* Payment */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-xl">
                <option value="">Select Payment Method</option>
                <option value="Credit Card">Credit Card</option>
                <option value="UPI">UPI</option>
                <option value="PayPal">PayPal</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-black hover:bg-gray-900 text-white py-3 rounded-xl text-lg font-semibold hover:opacity-90 shadow-lg transition">
              Place Order
              <HiOutlineCreditCard className="ml-2 h-6" />
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-8 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-3">
            Order Summary
          </h2>
          <div className="space-y-6 text-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src="https://via.placeholder.com/60"
                  alt="Product 1"
                  className="rounded-lg"
                />
                <span>Product 1</span>
              </div>
              <span className="font-medium">₹500</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src="https://via.placeholder.com/60"
                  alt="Product 2"
                  className="rounded-lg"
                />
                <span>Product 2</span>
              </div>
              <span className="font-medium">₹700</span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-xl text-gray-700">
              <span>Total</span>
              <span>₹1200</span>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="mt-6 p-4 bg-gradient-to-r from-gray-700 to-gray-500 rounded-xl text-sm text-white shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <HiTruck className="text-lg text-white" />
              <p className="font-medium">Free Delivery: 3–5 business days</p>
            </div>
            <div className="flex items-center gap-2">
              <HiReceiptRefund className="text-lg text-white" />
              <p className="font-medium">Easy 7-day return available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
