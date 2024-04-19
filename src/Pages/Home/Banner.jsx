import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import analyticsImg from "../../assets/images/analytics.jpg"
import ProjectBenefit from "../DashBoard/DashBoardBanner/ProjectBenefit";


// import { Link } from "react-router-dom";

const Banner = () => {
  const { isLoading } = UseAuth();
  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    <div className="lg:max-w-screen-xl lg:mx-auto lg:mt-24 mt-4 px-3 lg:px-0">
      <div className="lg:flex lg:items-center lg:min-h-[50vh] gap-2">
        <div className=" lg:w-[50%]">
          <h1 className="lg:text-6xl text-2xl font-bold leading-tight">
            <span className="text-blue-800">Money Balance</span> for your daily{" "}
            <span className="text-yellow-500"> <span className="">Finnancial</span> record.</span> 
          </h1>
          <p className="py-2">A daily money balance refers to the amount of money you have at the end of each day, taking into account both income and expenses. It is a snapshot of your financial health on a daily basis, helping you track your spending, monitor your budget, and make informed decisions about your finances.</p>
         <Link to="/register"> <button className="btn btn-secondary">Signup now</button></Link>
        </div>
        <div className="hidden lg:inline-block">
                 <img className="rounded-3xl" src={analyticsImg} alt="" />
               
        </div>
       
      </div>
      <div className="">
                <ProjectBenefit></ProjectBenefit>
                </div>
    </div>
  );
};

export default Banner;
