import React, { useState } from "react";
import FormModal from "../Common/FormModal";

const formFields = [
  { name: "type", placeholder: "Type (e.g. Home, Work)" },
  { name: "house", placeholder: "House Name / House No." },
  { name: "street", placeholder: "Street" },
  { name: "city", placeholder: "City" },
  { name: "district", placeholder: "District" },
  { name: "state", placeholder: "State" },
];

const initialFormvalues = {
  type: "",
  house: "",
  street: "",
  city: "",
  district: "",
  state: "",
};

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

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formValues, setFormValues] = useState(initialFormvalues);
  const [editingId, setEditingId] = useState(null);

const handleFormSubmit = (e) => {
  e.preventDefault();

  if (editingId) {
    // Edit existing address
    setAddresses((prev) =>
      prev.map((addr) =>
        addr.id === editingId
          ? { ...formValues, id: editingId, default: addr.default }
          : addr
      )
    );
  } else {
    // Add new address
    setAddresses((prev) => [
      ...prev,
      { ...formValues, id: Date.now(), default: prev.length === 0 },
    ]);
  }

  // reset form
  setFormValues(initialFormvalues);
  setEditingId(null);
  setIsFormOpen(false);
};

 const startEditing = (addr) =>{
  setFormValues(addr);
  setEditingId(addr.id);
  setIsFormOpen(true)
 }

  // Set Default Address 
  const setDefaultAddress = (id) => {
    setAddresses((prev) =>
      prev.map((addr) => ({
        ...addr,
        default: addr.id === id,
      }))
    );
  };

  // Delete Address
  const deleteAddress = (id) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
  };

  return (
    <div className="space-y-4">
      {addresses.map((addr) => (
        <div
          key={addr.id}
          className={`p-4 rounded-xl shadow flex flex-col sm:flex-row justify-between sm:items-center gap-3 
          ${
            addr.default ? "bg-green-50 border border-green-300" : "bg-white"
          }`}>
          <div>
            <h4 className="font-bold text-gray-900">{addr.type}</h4>
            <p className="text-gray-600 text-sm">
              {addr.house}, {addr.street}, {addr.city}, {addr.district},{" "}
              {addr.state}
            </p>
            {addr.default && (
              <span className="text-green-600 text-xs">Default</span>
            )}
          </div>
          <div className="flex gap-2">
            {!addr.default && (
              <button
                onClick={() => setDefaultAddress(addr.id)}
                className="px-3 py-1 text-xs bg-green-200 text-green-800 rounded-lg hover:bg-green-300">
                Set Default
              </button>
            )}
            <button
              onClick={()=>startEditing(addr)}
              className="px-3 py-1 text-xs bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
              Edit
            </button>
            <button
              onClick={() => deleteAddress(addr.id)}
              className="px-3 py-1 text-xs bg-red-200 text-red-700 rounded-lg hover:bg-red-300">
              Delete
            </button>
          </div>
        </div>
      ))}

      {/* Add New Address */}
      <button
        onClick={() => {
          setFormValues(initialFormvalues);
          setIsFormOpen(true);
        }}
        className="px-5 py-2 bg-black hover:bg-gray-800 text-white rounded-xl shadow text-sm">
        + Add Address
      </button>

      {/* Modal Form */}
      <FormModal
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

export default Addresses;
