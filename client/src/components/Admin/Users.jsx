import React, { useState } from "react";
import FormModal from "../Common/FormModal"

const formFields = [
  {name:"name",type:"text" },
  {name:"email",type:"text" }
]

const Users = () => {
  const [users, setUsers] =useState( [
    {
      id: 1,
      name: "Abhinav",
      email: "abhinav@example.com",
      role: "Customer",
      status: "Active",
    },
    {
      id: 2,
      name: "Rahul",
      email: "rahul@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 3,
      name: "Asha",
      email: "asha@example.com",
      role: "Customer",
      status: "Blocked",
    },
  ])
  const [isFormOpen,setIsFormOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    role: "",
  });

  const editUser = (user) =>{
   setFormValues({
     name: user.name,
     email: user.email,
     role: user.role,
   });
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
  
    setIsFormOpen(false)    
  }

  return (
    <div className="p-2 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">
        Users Management
      </h1>

      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="px-4 py-2 border rounded-lg w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white text-gray-800"
        />

        <select className="px-4 py-2 border rounded-lg w-full md:w-40 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white text-gray-800">
          <option value="">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Customer">Customer</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto bg-white shadow rounded-xl">
        <table className="w-full text-left">
          <thead className="bg-gray-200 text-gray-700 text-sm uppercase">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-50 transition">
                <td className="p-4">{user.id}</td>
                <td className="p-4 font-medium">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.role}</td>
                <td className="p-4">
                  {user.status === "Active" ? (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-900 text-white">
                      Active
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-300 text-gray-800">
                      Blocked
                    </span>
                  )}
                </td>
                <td className="p-4 text-center space-x-2">
                  <button
                    onClick={() => {
                      setIsFormOpen(true);
                      editUser(user);
                    }}
                    className="px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-black transition">
                    Edit
                  </button>

                  {user.status === "Active" ? (
                    <button className="px-3 py-1 text-sm bg-gray-600 text-white rounded hover:bg-gray-700 transition">
                      Block
                    </button>
                  ) : (
                    <button className="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600 transition">
                      Unblock
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <FormModal
        isFormOpen={isFormOpen}
        setIsFormOpen={setIsFormOpen}
        formFields={formFields}
        formValues={formValues}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Users;
