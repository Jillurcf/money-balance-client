import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram,  } from "react-icons/fa";


const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signinwithGoogle, signIn } = UseAuth()
  const [userPassword, setUserPassword] = useState(null);
  const [userEmail, setUserEmail] = useState("");

  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if (!userEmail) {
      new Swal("Email or passwrod does not match");
    } else if (!userPassword) {
      new Swal("Email or passwrod does not match");
    }

    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        const user = { email };

        // get acces token
        axios.post("https://loclahost/5000/api/v1/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          });




        event.target.reset();
        let userEmail = result.user.email;
        setUserEmail(userEmail);
        let userPassword = result.user.passord;
        setUserPassword(userPassword);
        console.log("success", userEmail, userPassword);
        new Swal("Login Success");
      })
      .catch((error) => {
        console.log(error);
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log("error", errorCode, errorMessage);
      });
    navigate(location?.state ? location.state : "/");
   
  };

  const handleGoogleSignIn = () => {
    signinwithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
    navigate(location?.state ? location.state : "/");
  };

  return (
    <div className=" h-screen items-center flex">
      <Helmet>
        <title>MB | Sign in</title>
      </Helmet>
      <div className="hero items-center">
        <div className="flex justify-between">
           {/* register image part start */}
           <div
            className="hero w-4/6"
            style={{
              backgroundImage: 'url(https://i.ibb.co/XyWpP16/signin-Img.jpg)'
            }}

          >
            
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="hero-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold leading-tight">Welcome to <br /> <span className="text-blue-600">Money Balance</span></h1>
                <p className="mb-5 text-blue-300">
                A daily money balance refers to the amount of money you have at the end of each day, taking into account both income and expenses. It is a snapshot of your financial health on a daily basis, helping you track your spending, monitor your budget, and make informed decisions about your finances.
                </p>
               <div className="flex gap-4 text-blue-300 mt-24">
                <FaFacebook />
                <FaYoutube />
                <FaLinkedin />
                <FaInstagram />
               </div>
              </div>
            </div>
          </div>
         
          <div className="card shadow-2xl w-96">
          
            <form onSubmit={handleSignin} className="card-body">
            <h1 className="text-blue-900 font-bold">Please Signin Here</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                
              </div>

              <div className="form-control mt-6">
                <div className="">
                <p onClick={handleGoogleSignIn} className=" mb-4 underline cursor-pointer">
                  Sign In with <span className="text-yellow-600">Google</span> <span> <Link className=" inline-block ml-2 underline text-blue-700 font-semibold">
                   <FcGoogle className="-ml-2 " />
                  </Link></span>
                  </p>
               
                </div>
                
                <button className="text-white font-bold btn bg-blue-600">Sign In</button>
              </div>
              <p className=" mb-4">
                Do not have an account? Please
                <Link
                  className="ml-2 underline text-blue-700 font-semibold"
                  to="/register"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
