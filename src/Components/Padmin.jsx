import { useState, useEffect, useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContext } from '../Provider/AuthProvider';

const Admin = () => {
  const datas = useLoaderData() || [];
  const [users, setUsers] = useState(datas);
  const [searchQuery, setSearchQuery] = useState("");
  const [editUser, setEditUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    contact_details: "",
    blood_group: "",
    occupation: "",
  });

  const { user } = useContext(AuthContext);
  const isAdmin = user?.isAdmin === true;

  useEffect(() => {
    if (editUser) {
      setFormData(editUser);
    } else {
      setFormData({ name: "", contact_details: "", blood_group: "", occupation: "" });
    }
  }, [editUser]);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEditClick = (user) => {
    setEditUser(user);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editUser) {
      setUsers(users.map((user) => (user.id === editUser.id ? formData : user)));
      setEditUser(null);
    } else {
      const newUser = { ...formData, id: users.length + 1 };
      setUsers([...users, newUser]);
    }
    setFormData({ name: "", contact_details: "", blood_group: "", occupation: "" });
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isAdmin) {
    return (
      <div className="p-5">
        <h1 className="text-2xl font-bold text-center">401: Unauthorized</h1>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <Link to={'/addData'}>
            <button className="btn btn-primary ml-4">New User</button>
          </Link>
        </div>

        <table className="table w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Blood Group</th>
              <th>Occupation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.id || index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>+{user.contact_details}</td>
                <td>{user.blood_group}</td>
                <td>{user.occupation}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm mr-2"
                    onClick={() => handleEditClick(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-error btn-sm"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {editUser && (
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Edit User</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Contact</label>
                  <input
                    type="text"
                    name="contact_details"
                    value={formData.contact_details}
                    onChange={handleFormChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Blood Group</label>
                  <input
                    type="text"
                    name="blood_group"
                    value={formData.blood_group}
                    onChange={handleFormChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Occupation</label>
                  <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleFormChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setEditUser(null)}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
