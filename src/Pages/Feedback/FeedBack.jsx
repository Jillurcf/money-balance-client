import axios from "axios";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddIncome = () => {
  const { user } = UseAuth();

  const handleAddIncome = (e) => {
    e.preventDefault();
    const form = e.target;
    const incomeSource = form.name.value;
    const incomeAmount = form.email.value;
    const date = form.date.value;
    const description = form.description.value;

    const addIncome = {
      incomeSource,
      incomeAmount,
    
      date,
     
      description,
    };
    console.log(addIncome);

    axios.post("https://money-balance-server.vercel.app/api/v1/addIncome", addIncome, {
      withCredentials: true,
    });
    Swal.fire("Income Added");
    e.target.reset();
  };

  return (
    <div className=" min-h-screen max-w-screen-xl mx-auto">
      <Helmet>
        <title>MB | Feedback</title>
      </Helmet>
      <div className="hero-content">
        <div className="">
          <div className="hero ">
            <div className="card flex-shrink-0 ">
              <form onSubmit={handleAddIncome} className=" mt-36 card-body">
                <h1 className="text-2xl font-bold">Please Give feedback</h1>
                <div className="lg:flex gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>

              
                <div className="lg:flex gap-4">
                 
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <textarea
                      type="text"
                      name="description"
                      className="input input-bordered w-[450px] h-80"
                      // required
                    />
                  </div>
                </div>

               

                <div className="form-control mt-6">
                  <button className="btn bg-blue-300 ">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddIncome;
