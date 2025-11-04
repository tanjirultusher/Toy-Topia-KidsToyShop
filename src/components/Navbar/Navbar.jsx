import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg font-semibold ${
              isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100 hover:text-blue-500"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-semibold ${
                  isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100 hover:text-blue-500"
                }`
              }
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-semibold ${
                  isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100 hover:text-blue-500"
                }`
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 rounded-lg font-semibold bg-red-500 text-white hover:bg-red-600"
            >
              Sign Out
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-semibold ${
                  isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100 hover:text-blue-500"
                }`
              }
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-semibold ${
                  isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100 hover:text-blue-500"
                }`
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-semibold ${
                  isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100 hover:text-blue-500"
                }`
              }
            >
              Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-white shadow-lg px-10 py-4git  justify-between sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-white rounded-lg shadow-lg mt-3 w-52 p-2"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="text-2xl font-bold text-blue-600">
          ToyTopia
        </NavLink>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">{links}</ul>
      </div>
    </div>
  );
};

export default NavBar;
