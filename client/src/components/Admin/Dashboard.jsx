import React from "react";
import { FiBarChart, FiPieChart } from "react-icons/fi";
import { HiShoppingCart, HiUser, HiCube, HiCurrencyDollar, HiPresentationChartLine, HiChartPie, HiArrowsExpand, HiDotsHorizontal } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Top Reports */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Sales</p>
              <h2 className="text-2xl font-bold">$45,200</h2>
            </div>
            <HiCurrencyDollar className="text-4xl text-black-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Orders</p>
              <h2 className="text-2xl font-bold">1,230</h2>
            </div>
            <HiShoppingCart className="text-4xl text-black" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Products</p>
              <h2 className="text-2xl font-bold">320</h2>
            </div>
            <HiCube className="text-4xl text-black" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Customers</p>
              <h2 className="text-2xl font-bold">850</h2>
            </div>
            <HiUser className="text-4xl text-black" />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
          <div className="h-64 flex space-x-2">
            <HiPresentationChartLine className="h-6 w-5 mr-2" /> Line Chart here
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">Top Products</h3>
          <div className="h-64 flex space-x-2">
            <FiBarChart className="h-6 w-5 mr-2" />
            Bar Chart here
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">Orders Status</h3>
          <div className="h-64 flex space-x-2">
            <span>
              <FiPieChart className="h-6 w-5 mr-2" />
            </span>{" "}
            Pie Chart here
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">Revenue by Category</h3>
          <div className="h-64 flex space-x-2">
            {" "}
            <span>
              <HiChartPie className="h-6 w-5 mr-2" />
            </span>{" "}
            Pie Chart here
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">Customer Growth</h3>
          <div className="h-64 flex space-x-2">
            {" "}
            <span>
              <HiArrowsExpand className="h-6 w-5 mr-2" />
            </span>{" "}
            Area Chart here
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">Low Stock Products</h3>
          <div className="h-64 flex space-x-2">
            <span>
              <HiDotsHorizontal className="h-6 w-5 mr-2" />
            </span>{" "}
            Horizontal Bar Chart here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
