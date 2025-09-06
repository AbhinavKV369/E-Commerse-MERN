const Notification = () => {
     const notifications = [
        { id: 1, msg: "Your order #ORD67890 has been shipped 🚚", time: "2h ago" },
        {
          id: 2,
          msg: "New product added to wishlist: Dell XPS 15 💻",
          time: "1d ago",
        },
        { id: 3, msg: "Password changed successfully 🔑", time: "3d ago" },
      ];
  return (
    <div className="space-y-3">
      {" "}
      {notifications.map((note) => (
          <div
            key={note.id}
            className="bg-white p-6 rounded-xl shadow flex justify-between items-center">
            <p className="text-sm text-gray-800">{note.msg}</p>
            <span className="text-xs text-gray-500">{note.time}</span>
          </div>
        ))}
    </div>
  );
}

export default Notification