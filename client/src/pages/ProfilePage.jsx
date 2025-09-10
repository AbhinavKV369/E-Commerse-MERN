import {
  FiPackage,
  FiHeart,
  FiMapPin,
  FiLock,
  FiLogOut,
  FiBell,
  FiCreditCard,
} from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
  const user = {
    name: "Abhinav",
    email: "abhinav@example.com",
    phone: "+91 751234567844",
    avatar:
      "https://ui-avatars.com/api/?name=Abhinav&background=000000&color=fff",
  };

  const tabs = [
    { id: "orders", label: "My Orders", icon: <FiPackage /> },
    { id: "wishlist", label: "Wishlist", icon: <FiHeart /> },
    { id: "addresses", label: "Addresses", icon: <FiMapPin /> },
    { id: "payments", label: "Payment Methods", icon: <FiCreditCard /> },
    { id: "notifications", label: "Notifications", icon: <FiBell /> },
    { id: "security", label: "Security", icon: <FiLock /> },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* profile for mobile and medium devices */}
        <div className="lg:hidden flex flex-col items-center bg-gray-800/70 shadow-lg text-white p-5 rounded-2xl">
          <img
            src={user.avatar}
            alt="profile"
            className="w-24 h-24 rounded-full border-4 border-gray-200  shadow-md"
          />
          <h1 className="text-lg font-bold  mt-3">{user.name}</h1>
          <p className=" text-sm">{user.email}</p>
          <p className=" text-sm">{user.phone}</p>
          <button className="mt-4 px-5 py-2 text-sm bg-black text-white rounded-lg shadow hover:bg-gray-800">
            Edit Profile
          </button>
        </div>
        {/* Sidebar (desktop) */}
        <aside className="hidden lg:block w-80 h-200 bg-white shadow-md rounded-xl p-6">
          {/* profile for  large devices */}
          <div className="flex flex-col items-center">
            <img
              src={user.avatar}
              alt="profile"
              className="w-24 h-24 rounded-full border-4 border-gray-200 shadow-md"
            />
            <h1 className="text-lg font-bold text-gray-900 mt-3">
              {user.name}
            </h1>
            <p className="text-gray-600 text-sm">{user.email}</p>
            <p className="text-gray-600 text-sm">{user.phone}</p>
            <button className="mt-4 px-5 py-2 text-sm bg-black text-white rounded-lg shadow hover:bg-gray-800">
              Edit Profile
            </button>
          </div>

          {/* Menu */}
          <nav className="mt-10 flex flex-col space-y-3">
            {tabs.map((tab) => (
              <NavLink
                key={tab.id}
                to={tab.id}
                className={({ isActive }) =>
                  `flex items-center w-full px-4 py-2 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? "bg-black text-white shadow"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`
                }>
                {tab.icon} {` `} {tab.label}
              </NavLink>
            ))}
          </nav>

          <button className="mt-8 w-full px-4 py-2 bg-red-600 text-white rounded-lg flex items-center gap-2 justify-center text-sm hover:bg-red-700">
            <FiLogOut /> Logout
          </button>
        </aside>

        {/* Mobile Tabs */}
        <div className="lg:hidden bg-white rounded-xl shadow-md p-3 flex gap-2 mt-2 overflow-x-auto">
          {tabs.map((tab) => (
            <NavLink
              key={tab.id}
              to={tab.id}
              className={({ isActive }) =>
                `flex-1 min-w-max px-3 py-2 text-xs rounded-lg transition ${
                  isActive
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`
              }>
              {tab.label}
            </NavLink>
          ))}
        </div>

        {/* Contents */}
        <main className="flex-1 mt-3 space-y-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Profile;
