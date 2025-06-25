import React, { useEffect, useState } from "react";
import axios from "axios";

const MenuBackOffice = () => {
  const [userSearch, setUserSearch] = useState("");
  const [postSearch, setPostSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://home-service-backend-9yhw.onrender.com/api/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Error al obtener usuarios", error);
    }
  };

  const fetchPosts = async () => {
    try {
      const res = await axios.get("https://home-service-backend-9yhw.onrender.com/api/services");
      setPosts(res.data);
    } catch (error) {
      console.error("Error al obtener posts", error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`https://home-service-backend-9yhw.onrender.com/api/users/${id}`);
      fetchUsers();
      fetchPosts();
    } catch (error) {
      console.error("Error al eliminar usuario", error);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      await axios.delete(`https://home-service-backend-9yhw.onrender.com/api/services/${id}`);
      fetchPosts();
    } catch (error) {
      console.error("Error al eliminar post", error);
    }
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(userSearch.toLowerCase()) ||
      u.email.toLowerCase().includes(userSearch.toLowerCase())
  );

  const filteredPosts = posts.filter(
    (p) =>
      p.name.toLowerCase().includes(postSearch.toLowerCase()) ||
      p.description.toLowerCase().includes(postSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen p-8" style={{ background: "#081F41" }}>
      <h1 className="text-3xl font-bold mb-8" style={{ color: "#0052CC" }}>
        BackOffice
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Usuarios */}
        <div className="rounded-lg shadow p-6" style={{ background: "#FFFFFF" }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "#0052CC" }}>
            Usuarios
          </h2>
          <input
            type="text"
            placeholder="Buscar usuario..."
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
            className="w-full mb-4 p-2 border rounded focus:outline-none"
            style={{
              borderColor: "#0052CC",
              color: "#081F41",
              background: "#fff",
              boxShadow: "none",
            }}
            onFocus={(e) => (e.target.style.boxShadow = `0 0 0 2px #00C6A0`)}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />
          <ul>
            {filteredUsers.map((user) => (
              <li
                key={user.id}
                className="flex justify-between items-center py-2 border-b last:border-b-0"
                style={{ borderColor: "#E5E7EB" }}
              >
                <div>
                  <span className="font-medium" style={{ color: "#081F41" }}>
                    {user.name}
                  </span>
                  <span className="ml-2 text-sm" style={{ color: "#808080" }}>
                    {user.email}
                  </span>
                </div>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="px-3 py-1 rounded transition"
                  style={{ background: "#0052CC", color: "#fff" }}
                  onMouseOver={(e) => (e.target.style.background = "#00C6A0")}
                  onMouseOut={(e) => (e.target.style.background = "#0052CC")}
                >
                  Dar de baja
                </button>
              </li>
            ))}
            {filteredUsers.length === 0 && (
              <li className="py-2" style={{ color: "#808080" }}>
                No se encontraron usuarios.
              </li>
            )}
          </ul>
        </div>

        {/* Posts */}
        <div className="rounded-lg shadow p-6" style={{ background: "#FFFFFF" }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "#0052CC" }}>
            Posts
          </h2>
          <input
            type="text"
            placeholder="Buscar post..."
            value={postSearch}
            onChange={(e) => setPostSearch(e.target.value)}
            className="w-full mb-4 p-2 border rounded focus:outline-none"
            style={{
              borderColor: "#0052CC",
              color: "#081F41",
              background: "#fff",
              boxShadow: "none",
            }}
            onFocus={(e) => (e.target.style.boxShadow = `0 0 0 2px #00C6A0`)}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />
          <ul>
            {filteredPosts.map((post) => (
              <li
                key={post.id}
                className="flex justify-between items-center py-2 border-b last:border-b-0"
                style={{ borderColor: "#E5E7EB" }}
              >
                <div>
                  <span className="font-medium" style={{ color: "#081F41" }}>
                    {post.name}
                  </span>
                  <span className="ml-2 text-sm" style={{ color: "#808080" }}>
                    {post.description?.slice(0, 40) || "Sin descripción"}
                  </span>
                </div>
                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="px-3 py-1 rounded transition"
                  style={{ background: "#0052CC", color: "#fff" }}
                  onMouseOver={(e) => (e.target.style.background = "#00C6A0")}
                  onMouseOut={(e) => (e.target.style.background = "#0052CC")}
                >
                  Dar de baja
                </button>
              </li>
            ))}
            {filteredPosts.length === 0 && (
              <li className="py-2" style={{ color: "#808080" }}>
                No se encontraron posts.
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuBackOffice;
