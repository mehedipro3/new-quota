import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import loginUser from "../assets/user.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // Check if the user is an admin directly from user object
  const isAdmin = user?.isAdmin === true;

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      {isAdmin && <li><NavLink to="/admin">Admin</NavLink></li>}
      {isAdmin ? "" : user?.email && <li><NavLink to="/myProfile">My Profile</NavLink></li>}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">Raise Voice</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <div>
          <img className="w-10 rounded-full" src={user?.photoURL || loginUser} alt="User Avatar" />
        </div>

        {user?.email ? (
          <button onClick={logOut} className="btn btn-neutral">LogOut</button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;