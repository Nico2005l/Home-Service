import React, { useState } from "react";

const mockUsers = [
  { id: 1, name: "Melissa Peters", email: "mpeters@gmail.com" },
  { id: 2, name: "Martín García", email: "martin@gmail.com" },
];

const mockPosts = [
  { id: 1, title: "Plomería en CABA", author: "Melissa Peters" },
  { id: 2, title: "Electricista zona norte", author: "Martín García" },
];

const MenuBackOffice = () => {
  const [userSearch, setUserSearch] = useState("");
  const [postSearch, setPostSearch] = useState("");
  const [users, setUsers] = useState(mockUsers);
  const [posts, setPosts] = useState(mockPosts);

  const handleDeleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(userSearch.toLowerCase()) ||
      u.email.toLowerCase().includes(userSearch.toLowerCase())
  );

  const filteredPosts = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(postSearch.toLowerCase()) ||
      p.author.toLowerCase().includes(postSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-blue-900">BackOffice</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Usuarios */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">Usuarios</h2>
          <input
            type="text"
            placeholder="Buscar usuario..."
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
            className="w-full mb-4 p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <ul>
            {filteredUsers.map((user) => (
              <li
                key={user.id}
                className="flex justify-between items-center py-2 border-b last:border-b-0"
              >
                <div>
                  <span className="font-medium">{user.name}</span>
                  <span className="text-gray-500 ml-2 text-sm">{user.email}</span>
                </div>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                >
                  Dar de baja
                </button>
              </li>
            ))}
            {filteredUsers.length === 0 && (
              <li className="text-gray-400 py-2">No se encontraron usuarios.</li>
            )}
          </ul>
        </div>
        {/* Posts */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">Posts</h2>
          <input
            type="text"
            placeholder="Buscar post..."
            value={postSearch}
            onChange={(e) => setPostSearch(e.target.value)}
            className="w-full mb-4 p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <ul>
            {filteredPosts.map((post) => (
              <li
                key={post.id}
                className="flex justify-between items-center py-2 border-b last:border-b-0"
              >
                <div>
                  <span className="font-medium">{post.title}</span>
                  <span className="text-gray-500 ml-2 text-sm">{post.author}</span>
                </div>
                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                >
                  Dar de baja
                </button>
              </li>
            ))}
            {filteredPosts.length === 0 && (
              <li className="text-gray-400 py-2">No se encontraron posts.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuBackOffice;