import React from 'react'

const Addresses = () => {
  const addresses = [
    {
      id: 1,
      type: "Home",
      details: "123 Street, Kochi, Kerala, 682001",
      default: true,
    },
    {
      id: 2,
      type: "Work",
      details: "Tech Park, Infopark, Kochi, 682030",
      default: false,
    },
  ];
  return (
    <div className="space-y-4">
      {addresses.map((addr) => (
        <div
          key={addr.id}
          className="bg-white p-4 rounded-xl shadow flex flex-col sm:flex-row justify-between sm:items-center gap-3">
          <div>
            <h4 className="font-bold text-gray-900">{addr.type}</h4>
            <p className="text-gray-600 text-sm">{addr.details}</p>
            {addr.default && (
              <span className="text-green-600 text-xs">Default</span>
            )}
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-xs bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
              Edit
            </button>
            <button className="px-3 py-1 text-xs bg-red-200 text-red-700 rounded-lg hover:bg-red-300">
              Delete
            </button>
          </div>
        </div>
      ))}
      <button className="px-5 py-2 bg-black hover:bg-gray-800 text-white rounded-xl shadow text-sm">
        + Add Address
      </button>
    </div>
  );
}

export default Addresses