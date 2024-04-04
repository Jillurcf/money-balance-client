import UseAuth from "../../Hooks/UseAuth";
import { Link } from "react-router-dom";

const Banner = () => {
  const { isLoading } = UseAuth();
  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    <div className="">
      <div
        className="hero min-h-[800px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/s3VDQNj/josh-appel-Ne-TPASr-bm-Q-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
   <div className="bg-blue-900 h-[300px] w-full">
        <h1 className="text-center md:text-6xl text-2xl font-bold text-white py-12 ">
          Balance your <span className="text-yellow-500">MONEY</span> Everyday
        </h1>
        <div className="lg:max-w-[500px] w-[400px] mx-auto grid lg:grid-cols-4 grid-cols-2 gap-4 pl-4 lg:pl-0">
          <div>
            <Link to="/addIncome">
              <button className="btn btn-outline btn-warning">Income</button>
            </Link>
          </div>
          <div>
            <Link to="/addExpense">
              {" "}
              <button className="btn btn-outline btn-secondary">Expense</button>
            </Link>
          </div>
          <div>
            <Link to="/dashboard">
              {" "}
              <button className="btn btn-outline btn-success">Balance</button>
            </Link>
          </div>
          <div>
            <Link to="/dashboard">
              {" "}
              <button className="btn btn-outline btn-accent">History</button>
            </Link>
          </div>
        </div>
      </div>
      </div>
   
    </div>
  );
};

export default Banner;
