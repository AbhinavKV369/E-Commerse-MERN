import React, { useState } from "react";

const AdminChats = () => {
  const [users] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Alice Smith" },
    { id: 3, name: "Mike Johnson" },
  ]);

  const [messages, setMessages] = useState([
    { userId: 1, sender: "user", text: "Where is my order?" },
    { userId: 1, sender: "admin", text: "Your order is on the way 🚚" },
    { userId: 2, sender: "user", text: "Do you have discounts?" },
    { userId: 2, sender: "admin", text: "Yes! 20% off on electronics." },
    { userId: 3, sender: "user", text: "Need help with payment" },
    { userId: 3, sender: "admin", text: "Sure, what issue are you facing?" },
  ]);

  const [input, setInput] = useState("");
  const [activeUser, setActiveUser] = useState(null);

  // Send message
  const handleSend = () => {
    if (!input.trim() || !activeUser) return;
    setMessages([
      ...messages,
      { userId: activeUser.id, sender: "admin", text: input },
    ]);
    setInput("");
  };

  return (
    <div className="flex h-screen">
      {/* Users Sidebar */}
      <div className="w-1/4 bg-gray-100 border-r p-4">
        <h2 className="text-lg font-bold mb-4">Users</h2>
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => setActiveUser(user)}
            className={`p-3 mb-2 rounded-lg cursor-pointer shadow-sm ${
              activeUser?.id === user.id ? "bg-black text-white" : "bg-white"
            }`}>
            <p className="font-semibold">{user.name}</p>
          </div>
        ))}
      </div>

      {/* All Messages Area */}
      <div className="w-3/4 flex flex-col bg-white">
        <div className="bg-black text-white p-3 font-bold">
          {activeUser ? `Chat with ${activeUser.name}` : "All Messages"}
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {messages
            .filter((msg) => (activeUser ? msg.userId === activeUser.id : true))
            .map((msg, index) => {
              const user = users.find((u) => u.id === msg.userId);
              return (
                <div
                  key={index}
                  className={`p-2 rounded-xl max-w-[70%] ${
                    msg.sender === "admin"
                      ? "bg-blue-500 text-white ml-auto"
                      : "bg-gray-200 text-black mr-auto"
                  }`}>
                  <span className="block text-xs font-semibold mb-1">
                    {msg.sender === "admin" ? "Admin" : user?.name}
                  </span>
                  {msg.text}
                </div>
              );
            })}
        </div>

        {/* Input */}
        {activeUser && (
          <div className="flex p-3 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a reply..."
              className="flex-1 p-2 border rounded-lg outline-none"
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-black text-white px-4 py-2 rounded-lg">
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminChats;
