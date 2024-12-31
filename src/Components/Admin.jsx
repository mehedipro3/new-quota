import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";






const Admin = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editUser, setEditUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", contact: "", bloodGroup: "", occupation: "", life: "" });
  const [showNewUserModal, setShowNewUserModal] = useState(false);


  useEffect(() => {
    fetchUsers();
  }, []);

  // fetchUsers function will fetch the users from the db.it will send a request to the port 5000 and get the data

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/datas');
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const handleEditClick = (user) => {
  //   setEditUser(user);
  //   setFormData(user);
  // };

  // handleDelete function will delete the user from the db
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
          axios.delete(`http://localhost:5000/datas/${id}`);
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

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editUser) {
        // Update existing user with a PUT requests
        const response = await axios.put(`http://localhost:5000/datas/${editUser._id}`, formData);
        setUsers(users.map((user) => (user._id === editUser._id ? response.data : user)));
        setEditUser(null);
      } else {
        // Create new user. it will fetch the db and update it with a new user and id
        // the new user will be added to the users array
        const response = await axios.post('http://localhost:5000/datas', formData);
        setUsers([...users, response.data]);
        setShowNewUserModal(false);
      }
      setFormData({ name: "", contact: "", bloodGroup: "", occupation: "" });
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const UserForm = ({ onSubmit, onCancel, initialData, title }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={initialData.name}
              onChange={(e) => handleFormChange(e)}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Contact</label>
            <input
              type="text"
              name="contact"
              value={initialData.contact}
              onChange={(e) => handleFormChange(e)}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Blood Group</label>
            <input
              type="text"
              name="bloodGroup"
              value={initialData.bloodGroup}
              onChange={(e) => handleFormChange(e)}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Occupation</label>
            <input
              type="text"
              name="occupation"
              value={initialData.occupation}
              onChange={(e) => handleFormChange(e)}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  //define prop types. for the handlers

  UserForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    initialData: PropTypes.shape({
      name: PropTypes.string,
      contact: PropTypes.string,
      bloodGroup: PropTypes.string,
      occupation: PropTypes.string,
    }).isRequired,
    title: PropTypes.string.isRequired,
  };

  const { user, logOut } = useContext(AuthContext);



  const isAdmin = user?.isAdmin === true;



  if (isAdmin === true) {
    return (
      <div>
        <Navbar />
        <div className="p-6 bg-gray-50 min-h-screen">
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Search by name"
              className="px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-purple-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Link to={'/addData'}>
            <button
              
              className="px-4 py-2 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700"
            >
              New User
            </button>
            </Link>
          </div>
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="w-full border-collapse">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">ID</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">Name</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">Contact</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">Blood Group</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">Occupation</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user,inx) => (
                    <tr key={user._id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b">{inx+1}</td>
                      <td className="px-4 py-2 border-b">{user.name}</td>
                      <td className="px-4 py-2 border-b">+{user.contact_details}</td>
                      <td className="px-4 py-2 border-b">{user.blood_group}</td>
                      <td className="px-4 py-2 border-b">{user.occupation}</td>
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

          {/* Edit Modal */}
          {editUser && (
            <UserForm
              onSubmit={handleFormSubmit}
              onCancel={() => setEditUser(null)}
              initialData={editUser}
              title="Edit User"
            />
          )}

          {/* New User Modal */}
          {showNewUserModal && (
            <UserForm
              onSubmit={handleFormSubmit}
              onCancel={() => setShowNewUserModal(false)}
              initialData={formData}
              title="New User"
            />
          )}
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <>
        <h1>401: unauthorized</h1>
      </>


    )

  }



};

export default Admin;