import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import analyticsImg from "../../assets/images/analytics.jpg";
import ProjectBenefit from "../DashBoard/DashBoardBanner/ProjectBenefit";
import addFurniture from "../../assets/images/addFurniture.jpg";

// import { Link } from "react-router-dom";

const Banner = () => {
  const { isLoading } = UseAuth();
  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    <div className="flex gap-8 px-12">
      <div className="col-span-1 border border-gray-100 mt-12">
        <h1 className="text-center text-blue-800 animate-bounce py-4 ">
          Advertisement here
        </h1>
        <h1 className="text-2xl font-bold text-blue-600 text-center">
          Want to buy your Dream Furniture
        </h1>
        
        <img className="animate-pulse w-1/2 mx-auto" src={addFurniture} alt="" />
        <p className="w-[250px] text-justify py-4">
          একটি দৈনিক অর্থ ব্যালেন্স আপনার কাছে থাকা অর্থের পরিমাণকে বোঝায়
          আয়-ব্যয় দুটোই বিবেচনায় নিয়ে প্রতিটি দিন শেষ। এটা প্রতিদিনের
          ভিত্তিতে আপনার আর্থিক স্বাস্থ্যের একটি স্ন্যাপশট, আপনাকে সহায়তা করে
          আপনার ব্যয় ট্র্যাক করুন, আপনার বাজেট নিরীক্ষণ করুন ও অবহিত করুন আপনার
          আর্থিক বিষয়ে সিদ্ধান্ত।
        </p>
      </div>
      <div className="col-span-8   lg:max-w-screen-xl lg:mx-auto lg:mt-24 mt-4 px-3 lg:px-0">
        <div className="lg:flex lg:items-center lg:min-h-[50vh] gap-2">
          <div className=" lg:w-[50%]">
            <h1 className="lg:text-6xl text-2xl font-bold leading-tight">
              <span className="text-blue-800">Money Balance</span> for your
              daily
              <span className="text-yellow-500">
                {" "}
                <span className="">Finnancial</span> record.
              </span>
            </h1>
            <p className="py-2">
              A daily money balance refers to the amount of money you have at
              the end of each day, taking into account both income and expenses.
              It is a snapshot of your financial health on a daily basis,
              helping you track your spending, monitor your budget, and make
              informed decisions about your finances.
            </p>
            <Link to="/register">
              {" "}
              <button className="btn btn-secondary">Signup now</button>
            </Link>
          </div>
          <div className="hidden lg:inline-block">
            <img className="rounded-3xl" src={analyticsImg} alt="" />
          </div>
        </div>
        <div className="">
          <ProjectBenefit></ProjectBenefit>
        </div>
      </div>
      <div className="col-span-2 border border-gray-100 mt-12">
        <h1 className="text-center text-blue-800 animate-bounce py-4 ">
          Advertisement here
        </h1>
        <img
          className="animate-pulse"
          src="https://i.ibb.co/z4cqzcR/HouseAdd.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
