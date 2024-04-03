import { FaHome, FaList, FaTrophy, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
// import useCart from "../Hooks/useCart";

import useAdmin from "../Hooks/useAdmin";
import UseAuth from "../Hooks/UseAuth";

const Dashboard = () => {
  // const [cart] = useCart();
  const { user } = UseAuth();

 
  const [isAdmin] = useAdmin();
  console.log(isAdmin);

  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className=" w-64 min-h-screen bg-purple-400">
        <ul className="menu p-4">
          {isAdmin == "admin" ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
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
                  Manage Contest
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
             {
              isAdmin == "creator" ? <li>
              <NavLink to="/dashboard/userHome">
                <FaHome></FaHome>
               Creator Home
              </NavLink>
            </li> :  <li>
              <NavLink to="/dashboard/userHome">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
             }
              {
                isAdmin == "creator" ? <li>
                <NavLink to="/dashboard/addContest">
                  <FaTrophy></FaTrophy>
                 Add Contest
                </NavLink>
              </li> : <li>
                <NavLink to="/dashboard/userWinning">
                  <FaTrophy></FaTrophy>
                  My Balance
                </NavLink>
              </li>
              }
             {
              isAdmin == "creator" ?  <li>
              <NavLink to="/dashboard/createdContest">
                <FaList></FaList>
                My Created Contest
              </NavLink>
            </li> :  <li>
              <NavLink to="/dashboard/cart">
                <FaList></FaList>
                {/* My Participated Contest, cart ({cart.length}) */}
              </NavLink>
            </li>
             }
           
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
          )}
          {/* <li>                  
                    <NavLink to="/dashboard/review">
                   <FaAd></FaAd>
                  Ad a Review
                    </NavLink>
                </li>
                <li>                  
                    <NavLink to="/dashboard/paymentHistory">
                    <FaList></FaList>
                  Real Payment History
                    </NavLink>
                </li>
                </>
             }
                {/* Shared navLink */}
          {/* <div className="divider">OR</div>
                <li>                  
                    <NavLink to="/">
                    <FaHome></FaHome>
                  Home
                    </NavLink>
                </li>
                <li>                  
                    <NavLink to="/order/salad">
                    <FaSearch></FaSearch>
                 Menu
                    </NavLink>
                </li>
                <li>                  
                    <NavLink to="/order/contact">
                 <FaEnvelope></FaEnvelope>
                 Contact
                    </NavLink>
                </li> */}
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
