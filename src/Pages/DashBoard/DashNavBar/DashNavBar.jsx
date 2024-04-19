
import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link} from "react-router-dom";
const DashNavBar = () => {
  const { user, loggedOut } = useContext(AuthContext);
  

  const handleLogOut = () => {
    loggedOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <div className="px-3 lg:px-0">
      <div className=" flex justify-between bg-base-100">
        <div className="">
          <div className="join">
            <input
              className="input input-bordered lg:w-96 join-item"
              placeholder="Search here"
            />
            <button className="btn join-item rounded-r-full bg-blue-600 hidden lg:block">
              <FaSearch className="text-white font-bold text-xl"></FaSearch>
            </button>
          </div>
        </div>

        <div className="flex-none gap-2">
          {/* <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div> */}
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
                   <Link to='/userProfile'> View Profile</Link>
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
    </div>
  );
};

export default DashNavBar;
