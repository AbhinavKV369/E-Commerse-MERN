import React, { useState } from "react";
import { toast } from "sonner"
import FormModal from "../Common/FormModal"; 

const initialFormValues = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const Security = () => {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);

  const loginActivity = [
    {
      device: "Chrome on Windows",
      location: "Kochi, India",
      time: "2025-09-07 14:30",
    },
    {
      device: "Safari on iPhone",
      location: "Trivandrum, India",
      time: "2025-09-05 20:15",
    },
  ];

  // Submit password change
  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    if (formValues.newPassword !== formValues.confirmPassword) {
      toast.error("New password and confirm password do not match");
      return;
    }

    setFormValues(initialFormValues);
    setIsPasswordModalOpen(false);
  };

  const passwordFields = [
    {
      name: "currentPassword",
      placeholder: "Current Password",
      type: "password",
    },
    { name: "newPassword",
       placeholder: "New Password",
        type: "password" },
    {
      name: "confirmPassword",
      placeholder: "Confirm Password",
      type: "password",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Change Password */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="font-semibold text-gray-900 mb-3">Change Password</h3>
        <button
          onClick={() => setIsPasswordModalOpen(true)}
          className="px-5 py-2 bg-black hover:bg-gray-800 text-white rounded-xl shadow text-sm">
          Update Password
        </button>
      </div>

      {/* Two-Factor Authentication */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="font-semibold text-gray-900 mb-3">
          Two-Factor Authentication
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          Add an extra layer of security to your account.
        </p>
        <button className="px-5 py-2 bg-black hover:bg-gray-800 text-white rounded-xl shadow text-sm">
          Enable 2FA
        </button>
      </div>

      {/* Login Activity */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="font-semibold text-gray-900 mb-3">Login Activity</h3>
        <ul className="space-y-2">
          {loginActivity.map((log, idx) => (
            <li
              key={idx}
              className="flex justify-between text-sm text-gray-700 border-b pb-2">
              <span>{log.device}</span>
              <span>{log.location}</span>
              <span>{log.time}</span>
            </li>
          ))}
        </ul>
        <button className="mt-3 px-5 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-xl shadow text-sm">
          Sign out of all devices
        </button>
      </div>

      {/* Email & Phone Verification */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="font-semibold text-gray-900 mb-3">Email & Phone</h3>
        <p className="text-sm text-gray-600">
          Email: <span className="font-medium text-green-600">Verified</span>
        </p>
        <p className="text-sm text-gray-600">
          Phone: <span className="font-medium text-red-600">Not Verified</span>
        </p>
        <button className="mt-3 px-5 py-2 bg-black hover:bg-gray-800 text-white rounded-xl shadow text-sm">
          Verify Phone
        </button>
      </div>

      {/* Password Modal */}
      <FormModal
        isFormOpen={isPasswordModalOpen}
        setIsFormOpen={setIsPasswordModalOpen}
        title="Update Password"
        formFields={passwordFields}
        formValues={formValues}
        setFormValues={setFormValues}
        onSubmit={handlePasswordSubmit}
      />
    </div>
  );
};

export default Security;
