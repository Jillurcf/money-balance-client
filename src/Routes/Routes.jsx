import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
// import Blog from "../Pages/Blog/Blog";
import SignIn from "../Pages/SignIn/SignIn";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Pages/UserProfile/UserProfile";
import AddIncome from "../Pages/AddIncome/AddIncome";
import AddExpense from "../Pages/AddExpense/AddExpense";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";
import ManageUsers from "../Pages/DashBoard/ManageUsers/ManageUsers";
import DashBoardContents from "../Pages/DashBoard/DashBoardBanner/DashBoardContents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
       
        

    ]
  },
  {
    path: 'signin',
    element: <SignIn></SignIn>
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: 'userProfile',
    element: <UserProfile></UserProfile>
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
      <Dashboard></Dashboard>
      </PrivateRoute>
    ),

    children: [
      // normal users routes
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      
      // // admin only routes
      {
        path: "adminHome",
        element: (
          // <AdminRoute>
            <AdminHome></AdminHome>
          // </AdminRoute>
        ),
      },
      {
        path: 'addIncome',
        element: <AddIncome></AddIncome>
        
      },
      {
        path: 'addExpense',
        element: <AddExpense></AddExpense>
        
      },
  
      {
        path: "mangeUsers",
        element: (
          // <AdminRoute>
            <ManageUsers></ManageUsers>
          // </AdminRoute>
        ),
      },
      {
        path: "userProfile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "dashboardContents",
        element: <DashBoardContents></DashBoardContents>
      },
    ],
  },
]);
export default router;