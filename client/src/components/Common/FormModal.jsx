import React from "react";

const FormModal = ({
  isFormOpen,
  setIsFormOpen,
  formFields,
  formValues,
  setFormValues,
  onSubmit,
}) => {
  if (!isFormOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl w-[90%] max-w-md shadow-xl relative">
        <h2 className="text-xl font-semibold text-gray-900 mb-5">
          Add / Edit Address
        </h2>
        <form className="space-y-4" onSubmit={onSubmit}>
          {formFields.map((field) => (
            <input
              key={field.name}
              name={field.name}
              value={formValues[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black/70 focus:border-black/70 outline-none transition"
            />
          ))}

          <div className="flex justify-end gap-3 pt-3">
            <button
              onClick={() => setIsFormOpen(false)}
              type="button"
              className="px-5 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition text-sm font-medium">
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-900 transition text-sm font-medium shadow-sm">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
