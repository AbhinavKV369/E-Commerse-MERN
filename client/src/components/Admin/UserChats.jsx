import React from "react";

const AdminChatsModernUI = () => {
  const users = [
    { name: "John Doe", avatar: "https://i.pravatar.cc/40?img=1" },
    { name: "Jane Smith", avatar: "https://i.pravatar.cc/40?img=2" },
    { name: "Alex Johnson", avatar: "https://i.pravatar.cc/40?img=3" },
    { name: "Emily Clark", avatar: "https://i.pravatar.cc/40?img=4" },
    { name: "Michael Brown", avatar: "https://i.pravatar.cc/40?img=5" },
  ];

  const messages = [
    {
      sender: "user",
      text: "Hi, I need help with my order.",
      time: "10:01 AM",
    },
    {
      sender: "admin",
      text: "Sure! Can you provide your order ID?",
      time: "10:02 AM",
    },
    { sender: "user", text: "Here is my order ID: 12345", time: "10:03 AM" },
  ];

  return (
    <div className="fixed left-0 right-0 bottom-0 top-20 flex bg-gray-100 shadow-lg">
      {/* Users List */}
      <div className="w-1/4 bg-white border-r flex flex-col">
        <h2 className="p-4 font-bold border-b text-gray-700">Users</h2>
        <ul className="overflow-y-auto flex-1">
          {users.map((user, index) => (
            <li
              key={index}
              className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 transition rounded">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="text-gray-700 font-medium">{user.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-end ${
                msg.sender === "admin" ? "justify-end" : "justify-start"
              }`}>
              <div
                className={`flex flex-col ${
                  msg.sender === "admin" ? "items-end" : "items-start"
                }`}>
                <div
                  className={`p-3 rounded-lg max-w-xs break-words ${
                    msg.sender === "admin"
                      ? "bg-gray-600 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}>
                  {msg.text}
                </div>
                <span className="text-xs text-gray-400 mt-1">{msg.time}</span>
              </div>
            </div>
          ))}
          <div></div>
        </div>

        {/* Input */}
        <div className="p-4 border-t flex gap-3 items-center bg-white">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="px-4 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-500 transition">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminChatsModernUI;
