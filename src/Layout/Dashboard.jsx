import { FaHome, FaTrophy, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

import useAdmin from "../Hooks/useAdmin";
import UseAuth from "../Hooks/UseAuth";
import DashNavBar from "../Pages/DashBoard/DashNavBar/DashNavBar";
import { MdSpaceDashboard, MdAnalytics } from "react-icons/md";
import { FcMultipleInputs } from "react-icons/fc";
import { GiExpense } from "react-icons/gi"
import { IoSettings, IoWallet, } from "react-icons/io5";

const Dashboard = () => {
  // const [cart] = useCart();
  const { user } = UseAuth();

  const [isAdmin] = useAdmin();
  console.log(isAdmin);

  return (
    <div className="lg:flex">
      {/* dashboard sidebar */}
      <div className="lg:fixed lg:w-48 w-full lg:min-h-screen bg-blue-950 text-white">
        <ul className="menu px-4 py-8">
          {isAdmin == "admin" ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>t
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mangeUsers">
                  <FaUsers></FaUsers>
                  Mange Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageContests">
                  <FaTrophy></FaTrophy>
                 Manage User Contest
                </NavLink>
              </li>
              <div className="divider">OR</div>
              <li>
                <NavLink to="/dashboard/userProfile">
                  <FaUsers></FaUsers>
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome>
                  Home
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {isAdmin == "creator" ? (
                <li>
                  <NavLink to="/dashboard/userHome">
                    <FaHome></FaHome>
                    User Home
                  </NavLink>
                </li>
              ) : (
                <li className="">
                  <NavLink to="/dashboard/dashboardContents">
                    <MdSpaceDashboard></MdSpaceDashboard>
                    Dashboard
                  </NavLink>
                </li>
              )}
              {isAdmin == "creator" ? (
                <li>
                  <NavLink to="/dashboard/addContest">
                    <FaTrophy></FaTrophy>
                    Add User
                  </NavLink>
                </li>
              ) : (
                <li className="py-4">
                  <NavLink to="/dashboard/addIncome">
                    <FcMultipleInputs className="text-white"></FcMultipleInputs>
                    Income
                  </NavLink>
                </li>
                
              )}
              {isAdmin == "creator" ? (
                <li>
                  <NavLink to="/dashboard/addContest">
                    <FaTrophy></FaTrophy>
                    Add Contest
                  </NavLink>
                </li>
              ) : (
                <li>
                  <NavLink to="/dashboard/addExpense">
                    <GiExpense></GiExpense>
                    Expenses
                  </NavLink>
                </li>
                
              )}
              {isAdmin == "creator" ? (
                <li>
                  <NavLink to="/dashboard/addContest">
                    <FaTrophy></FaTrophy>
                    Add expenses
                  </NavLink>
                </li>
              ) : (
                <li className="py-6">
                  <NavLink to="/dashboard/userWinning">
                    <IoWallet></IoWallet>
                    Wallets
                  </NavLink>
                </li>
                
              )}
              {isAdmin == "creator" ? (
                <li>
                  <NavLink to="/dashboard/addContest">
                    <FaTrophy></FaTrophy>
                    Add Income
                  </NavLink>
                </li>
              ) : (
                <li className="">
                  <NavLink to="/dashboard/userWinning">
                    <MdAnalytics></MdAnalytics>
                    Analytics
                  </NavLink>
                </li>
                
              )}
              

              <div className="divider border-b-2 text-white py-6"></div>
              <li>
                <NavLink to="/dashboard/userProfile">
                  <FaUsers></FaUsers>
                  My Profile
                </NavLink>
              </li>
              <li className="py-6">
                <NavLink to="/">
                  <FaHome></FaHome>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                <IoSettings></IoSettings>
                  Settings
                </NavLink>
              </li>
            </>
          )}
          
        </ul>
      </div>
      {/* dashboard content */}
      <div className=" flex-1 py-6 max-w-screen-xl mx-auto">
        <div className="">
        <DashNavBar></DashNavBar>
        <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
