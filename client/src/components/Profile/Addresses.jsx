import React, { useState } from "react";
import FormModal from "../Common/FormModals";

const formFields = [
  { name: "type", placeholder: "Type (e.g. Home, Work)" },
  { name: "house", placeholder: "House Name / House No." },
  { name: "street", placeholder: "Street" },
  { name: "city", placeholder: "City" },
  { name: "district", placeholder: "District" },
  { name: "state", placeholder: "State" },
];

const Addresses = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Home",
      house: "123",
      street: "Street",
      city: "Kochi",
      district: "Kerala",
      state: "Kerala",
      default: true,
    },
    {
      id: 2,
      type: "Work",
      house: "Tech Park",
      street: "Infopark",
      city: "Kochi",
      district: "Kerala",
      state: "Kerala",
      default: false,
    },
  ]);

  const [isFormOpen,setIsFormOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    type: "",
    house: "",
    street: "",
    city: "",
    district: "",
    state: "",
  });

  const handleFormSubmit = (e) =>{
  }

  return (
    <div className="space-y-4">
      {addresses.map((addr) => (
        <div
          key={addr.id}
          className="bg-white p-4 rounded-xl shadow flex flex-col sm:flex-row justify-between sm:items-center gap-3">
          <div>
            <h4 className="font-bold text-gray-900">{addr.type}</h4>
            <p className="text-gray-600 text-sm">
              {addr.house}, {addr.street}, {addr.city}, {addr.district},{" "}
              {addr.state}
            </p>
            {addr.default && (
              <span className="text-white bg-gray-900 p-1 rounded-md text-sm">Default</span>
            )}
          </div>
          <div className="flex gap-2">
            <button
              className="px-3 py-1 text-xs bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
              Edit
            </button>
            <button className="px-3 py-1 text-xs bg-red-200 text-red-700 rounded-lg hover:bg-red-300">
              Delete
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={() => {
          setIsFormOpen(true);
        }}
        className="px-5 py-2 bg-black hover:bg-gray-800 text-white rounded-xl shadow text-sm">
        + Add Address
      </button>
      {/* Popup Form Modal */}
      <div>
        <FormModal
          isFormOpen={isFormOpen}
          setIsFormOpen={setIsFormOpen}
          formFields={formFields}
          formvalues={formValues}
          setFormValues={setFormValues}
          onSubmit={handleFormSubmit}
        />
      </div>
    </div>
  );
};

export default Addresses;
