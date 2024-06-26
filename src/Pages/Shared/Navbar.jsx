import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { motion } from "framer-motion";
import { IoIosNotifications } from "react-icons/io";

const NavBar = () => {
  const { user, loggedOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-blue-600 text-white font-bold"
              : "text-blue-800 font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-blue-600 text-white font-bold"
              : "text-blue-800 font-bold"
          }
        >
          About us
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/faq"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-blue-600 text-white font-bold"
              : "text-blue-800 font-bold"
          }
        >
          FAQ
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/dashboardContents"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-blue-600 text-white font-bold"
              : "text-blue-800 font-bold"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/feedback"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-blue-600 text-white font-bold"
              : "text-blue-800 font-bold"
          }
        >
          Feedback
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    loggedOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <div className="mx-auto z-40 bg-blue-50 drop-shadow-md relative">
    
      <div className="navbar lg:h-24 opacity-80 max-w-[1240px] mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost text-blue-600 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
       
          <motion.h1
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="lg:text-3xl font-extrabold"
          >
            <div className="flex gap-2">
              {/* <img className="max-w-12" src="/src/assets/images/money-balance-logo.png" alt="Logo Image" /> */}
              <h1 className="text-blue-500"> Money Balance </h1>
            </div>{" "}
          </motion.h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown z-30 dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {/* <h1 className="text-center text-blue-600 font-bold">User Profile</h1> */}
                <li>
                  <button className="btn btn-sm btn-secondary">
                    <Link to="/userProfile"> View Profile</Link>
                  </button>
                </li>
                <li>
                  <button className="btn btn-sm btn-ghost">
                    Name: {user.displayName}
                  </button>
                </li>

                <li>
                  <button
                    className="btn btn-sm btn-ghost mt-4"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/signin">
              <button className="btn bg-blue-600 border-none rounded-7xl text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
   
    </div>
  );
};

export default NavBar;
