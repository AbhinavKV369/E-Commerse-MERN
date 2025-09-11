import React from "react";

const PaymentMethods = () => {
  const payments = [
    { id: 1, card: "**** **** **** 1234", type: "Visa", expiry: "06/26" },
    { id: 2, card: "**** **** **** 5678", type: "Mastercard", expiry: "09/27" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {payments.map((card) => (
        <div
          key={card.id}
          className="relative h-48 w-full rounded-2xl shadow-xl p-6 text-white bg-gray-800 flex flex-col justify-between overflow-hidden">
          {/* Decorative circles (like real cards) */}

          {/* Card Type */}
          <div className="text-sm uppercase tracking-widest font-semibold opacity-80">
            {card.type}
          </div>

          {/* Card Number */}
          <div className="tracking-widest text-2xl font-mono">{card.card}</div>

          {/* Expiry + Remove */}
          <div className="flex justify-between items-center text-sm">
            <p className="opacity-80">Exp: {card.expiry}</p>
            <button className="px-3 py-1 text-xs bg-red-500/80 hover:bg-red-600 rounded-lg transition">
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* Add Card */}
      <button className="h-48 w-full rounded-2xl border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-600 hover:border-black hover:text-black transition text-sm font-medium">
        + Add New Card
      </button>
    </div>
  );
};

export default PaymentMethods;
