import React, { useState } from "react";

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
    country: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="w-full max-w-10xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Checkout Form */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">Billing & Shipping</h2>
          <form className="space-y-4 " onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-gray-300"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-red-800"
                placeholder="john@example.com"
              />
            </div>

            {/* Address Fields */}
            <div className="grid grid-cols-2 space-x-2">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  House Name
                </label>
                <input
                  type="text"
                  name="houseName"
                  value={formData.houseName}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-lg"
                  placeholder="Green Villa"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Street
                </label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-lg"
                  placeholder="MG Road"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-lg"
                  placeholder="Kochi"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  District
                </label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-lg"
                  placeholder="Ernakulam"
                />
              </div>

              {/* Dropdown for State */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  State
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-lg">
                  <option value="">Select State</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Delhi">Delhi</option>
                </select>
              </div>

              {/* Pincode */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Pincode
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-lg"
                  placeholder="682001"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg">
                <option value="">Select Payment Method</option>
                <option value="Credit Card">Credit Card</option>
                <option value="UPI">UPI</option>
                <option value="PayPal">PayPal</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition">
              Place Order
            </button>
          </form>
        </div>

        {/* Right Side - Order Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Product 1</span>
              <span>₹500</span>
            </div>
            <div className="flex justify-between">
              <span>Product 2</span>
              <span>₹700</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>₹1200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
