import React from 'react'

const PaymentMethods = () => {
    const payments = [
      { id: 1, card: "**** **** **** 1234", type: "Visa", expiry: "06/26" },
      { id: 2, card: "**** **** **** 5678", type: "Mastercard", expiry: "09/27" },
    ];
  return (
    <div>
      {" "}
        <div className="space-y-4">
          {payments.map((card) => (
            <div
              key={card.id}
              className="bg-white p-4 rounded-xl shadow flex flex-col sm:flex-row justify-between sm:items-center gap-3">
              <div>
                <p className="font-semibold text-gray-900">{card.type}</p>
                <p className="text-gray-600 text-sm">
                  {card.card} (Exp: {card.expiry})
                </p>
              </div>
              <button className="px-3 py-1 text-xs bg-red-200 text-red-700 rounded-lg hover:bg-red-300">
                Remove
              </button>
            </div>
          ))}
          <button className="px-5 py-2 bg-black hover:bg-gray-800 text-white rounded-xl shadow text-sm">
            + Add Card
          </button>
        </div>
    </div>
  );
}

export default PaymentMethods