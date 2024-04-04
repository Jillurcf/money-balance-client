import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import SignIn from "../Pages/SignIn/SignIn";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Pages/UserProfile/UserProfile";
import AddIncome from "../Pages/AddIncome/AddIncome";
import AddExpense from "../Pages/AddExpense/AddExpense";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
// import Cart from "../Pages/DashBoard/Cart/Cart";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";
import ManageUsers from "../Pages/DashBoard/ManageUsers/ManageUsers";

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
        // {
        //   path:'allTasks',
        //   element: <AllTasks></AllTasks>
        // },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        // {
        //   path: 'seeDetail/:id',
        //   element: <SeeDetail></SeeDetail>,
        //   loader: ({params})=> fetch(`https://money-balance-server.vercel.app/api/v1/allIncome/${params.id}`)

        // },
       
        {
          path: 'addIncome',
          element: <AddIncome></AddIncome>
          
        },
        {
          path: 'addExpense',
          element: <AddExpense></AddExpense>
          
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
      // {
      //   path: "cart",
      //   element: <Cart></Cart>,
      // },
      // {
      //   path: "payment",
      //   element: <Payment></Payment>,
      // },
      // {
      //   path: "userWinning",
      //   element: <MywinningContestPage></MywinningContestPage>,
      // },
      // {
      //   path: "createdContest",
      //   element: <CreatedContest></CreatedContest>,
      // },
      // {
      //   path: "updateContest",
      //   element: <UpdateContest></UpdateContest>,
      // },
      // {
      //   path: 'paymentHistory',
      //   element: <PaymentHistory></PaymentHistory>
      // },
      // // admin only routes
      {
        path: "adminHome",
        element: (
          // <AdminRoute>
            <AdminHome></AdminHome>
          // </AdminRoute>
        ),
      },
      // {
      //   path: "addContest",
      //   element: <AddContest></AddContest>,
      // },
      // {
      //   path: "manageContests",
      //   element: (
      //     <AdminRoute>
      //       <ManageContests></ManageContests>
      //     </AdminRoute>
      //   ),
      // },
      // {
      //   path: "UpdateContest/:id",
      //   element: <UpdateContest></UpdateContest>,
      //   loader: ({ params }) =>
      //     fetch(`https://assignment12-server-seven.vercel.app/Contests/${params.id}`),
      // },
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
    ],
  },
]);
export default router;