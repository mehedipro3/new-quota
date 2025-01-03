import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";






const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);


  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/data');
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  


  // delete the user from the db
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(`http://localhost:5000/data/${id}`);
          setUsers(users.filter((user) => user._id !== id));
        } catch (error) {
          console.error("Error deleting user:", error);
        }

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  };

  const { user } = useContext(AuthContext);
  const isAdmin = user?.isAdmin === true;

  if (isAdmin === true) {
    return (
      <div>
        <Navbar />
        <div className="p-6 bg-gray-50 min-h-screen">
          <div className="mb-4">
            <Link to={'/addData'}>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
              >
                Add New Book
              </button>
            </Link>
          </div>
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="w-full border-collapse">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">ID</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">Book Name</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">Author Name</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">Genre</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">Rating</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user, inx) => (
                    <tr key={user._id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b">{inx + 1}</td>
                      <td className="px-4 py-2 border-b">{user.title}</td>
                      <td className="px-4 py-2 border-b">{user.author}</td>
                      <td className="px-4 py-2 border-b">{user.genre}</td>
                      <td className="px-4 py-2 border-b">{user.rating}</td>
                      <td className="px-4 py-2 border-b flex gap-2">
                        <Link to={`/updateData/${user._id}`}>
                          <button
                            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
                          >
                            Edit
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(user._id)}
                          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-4 py-2 text-center text-gray-500">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

};

export default Admin;