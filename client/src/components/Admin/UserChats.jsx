import React, { useState, useRef, useEffect } from "react";

const AdminChats = () => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alex Johnson" },
    { id: 4, name: "Emily Clark" },
    { id: 5, name: "Michael Brown" },
  ];

  const initialMessages = {
    1: [
      { sender: "user", text: "Hi, I need help with my order." },
      { sender: "admin", text: "Sure! Can you provide your order ID?" },
    ],
    2: [{ sender: "user", text: "Hello! My product arrived damaged." }],
    3: [{ sender: "user", text: "Can I change my delivery address?" }],
    4: [{ sender: "user", text: "I want to cancel my subscription." }],
    5: [{ sender: "user", text: "Do you ship internationally?" }],
  };

  const [selectedUser, setSelectedUser] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const chatEndRef = useRef(null);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages({
      ...messages,
      [selectedUser]: [
        ...(messages[selectedUser] || []),
        { sender: "admin", text: newMessage },
      ],
    });
    setNewMessage("");
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, selectedUser]);

  return (
    <div className="fixed left-0 right-0 bottom-0 top-20 flex bg-gray-100">
      {/* Users List */}
      <div className="w-1/4 bg-white border-r">
        <h2 className="p-4 font-bold border-b">Users</h2>
        <ul className="overflow-y-auto h-full">
          {users.map((user) => (
            <li
              key={user.id}
              onClick={() => setSelectedUser(user.id)}
              className={`p-3 cursor-pointer hover:bg-gray-200 ${
                selectedUser === user.id ? "bg-blue-100 font-semibold" : ""
              }`}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-4 overflow-y-auto">
          {messages[selectedUser]?.map((msg, i) => (
            <div
              key={i}
              className={`p-2 my-1 rounded-lg max-w-xs break-words ${
                msg.sender === "admin"
                  ? "bg-blue-500 text-white ml-auto text-right"
                  : "bg-gray-300 text-gray-800 mr-auto"
              }`}>
              {msg.text}
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>

        {/* Input */}
        <div className="p-4 border-t flex gap-2">
          <input
            type="text"
            className="flex-1 p-2 border rounded"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminChats;
