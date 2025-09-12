import React, { useState } from "react";
import FormModal from "../Common/FormModal";

const initialFormValues = {
  nameOnCard: "", 
  cardNumber: "",
  expiry: "",
  cvv: "",
};

const formFields = [
  {
    name: "cardNumber",
    placeholder: "Card Number",
    type: "text",
    autoComplete: "cc-number",
  },
  {
    name: "nameOnCard", 
    placeholder: "Name on Card",
    type: "text",
    autoComplete: "cc-name",
  },
  {
    name: "expiry",
    placeholder: "MM/YY",
    type: "text",
    autoComplete: "cc-exp",
  },
  {
    name: "cvv",
    placeholder: "CVV",
    type: "password",
    autoComplete: "cc-csc",
  },
];

const PaymentMethods = () => {
  const [payments, setPayments] = useState([
    {
      id: 1,
      card: "**** **** **** 1234",
      type: "Visa",
      expiry: "06/26",
      nameOnCard: "Abhinav",
      default: true,
    },
    {
      id: 2,
      card: "**** **** **** 5678",
      type: "Mastercard",
      expiry: "09/27",
      nameOnCard: "Abhinav",
      default: false,
    },
  ]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const addCard = {
      ...formValues,
      id: Date.now(),
      card: `**** **** **** ${formValues.cardNumber.slice(-4)}`,
      default: payments.length === 0,
    };
    setPayments((prev) => [...prev, addCard]);
    setFormValues(initialFormValues);
    setIsFormOpen(false);
  };

  const setDefault = (id) => {
    setPayments((prev) =>
      prev.map((payment) => ({ ...payment, default: payment.id === id }))
    );
  };

  const removeCard = (id) => {
    setPayments((prev) => prev.filter((pay) => pay.id !== id));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {payments.map((card) => (
        <div
          key={card.id}
          className="relative h-48 w-full rounded-2xl shadow-xl p-6 text-white bg-gray-800 flex flex-col justify-between overflow-hidden">
          {/* Default tag */}
          {card.default && (
            <span className="absolute top-3 right-3 bg-green-500 text-xs px-2 py-1 rounded">
              Default
            </span>
          )}
          {/* Card Type */}
          <div className="text-sm uppercase tracking-widest font-semibold opacity-80">
            {card.type}
          </div>
          {/* Card Number */}
          <div className="tracking-widest text-2xl font-mono">{card.card}</div>
          {/* Cardholder */}
          <p className="text-sm mt-2">{card.nameOnCard}</p>{" "}
          {/* Expiry + Actions */}
          <div className="flex justify-between items-center text-sm">
            <p className="opacity-80">Exp: {card.expiry}</p>
            <div className="flex gap-2">
              {!card.default && (
                <button
                  onClick={() => setDefault(card.id)}
                  className="px-3 py-1 text-xs bg-green-500/80 hover:bg-green-600 rounded-lg transition">
                  Set Default
                </button>
              )}
              <button
                onClick={() => removeCard(card.id)}
                className="px-3 py-1 text-xs bg-red-500/80 hover:bg-red-600 rounded-lg transition">
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Add Card */}
      <button
        onClick={() => {
          setFormValues(initialFormValues);
          setIsFormOpen(true);
        }}
        className="h-48 w-full rounded-2xl border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-600 hover:border-black hover:text-black transition text-sm font-medium">
        + Add New Card
      </button>
      <FormModal
        title="Payment Card"
        isFormOpen={isFormOpen}
        setIsFormOpen={setIsFormOpen}
        formFields={formFields}
        formValues={formValues}
        setFormValues={setFormValues}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default PaymentMethods;
