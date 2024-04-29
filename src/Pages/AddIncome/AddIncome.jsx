import axios from "axios";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddIncome = () => {
  const { user } = UseAuth();

  const handleAddIncome = (e) => {
    e.preventDefault();
    const form = e.target;
    const incomeSource = form.incomeSource.value;
    const incomeAmount = form.amount.value;
    const userName = form.userName.value;
    const month = form.month.value;
    const year = form.year.value;
    const date = form.date.value;
    const email = form.userEmail.value;
    const description = form.description.value;

    const addIncome = {
      incomeSource,
      incomeAmount,
      userName,
      email,
      date,
      month,
      year,
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
    <div className="">
      <Helmet>
        <title>MB | Add Income</title>
      </Helmet>
      <div className="hero-content">
        <div className="">
          <div className="hero ">
            <div className="card flex-shrink-0 ">
              <form onSubmit={handleAddIncome} className=" mt-36 card-body">
                <h1 className="text-2xl font-bold">Please add a Income</h1>
                <div className="lg:flex gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Income source</span>
                    </label>
                    <input
                      type="text"
                      name="incomeSource"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Income Amount</span>
                    </label>
                    <input
                      type="number"
                      name="amount"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>

                <div className="lg:flex gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Month</span>
                    </label>
                    <input
                      type="text"
                      name="month"
                      className="input input-bordered"
                      // required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Year</span>
                    </label>
                    <input
                      type="text"
                      name="year"
                      className="input input-bordered"
                      // required
                    />
                  </div>
                </div>
                <div className="lg:flex gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Date</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      className="input input-bordered"
                      // required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <input
                      type="text"
                      name="description"
                      className="input input-bordered"
                      // required
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Added By</span>
                  </label>
                  <div className="lg:flex gap-4">
                    <input
                      type="text"
                      name="userName"
                      defaultValue={user?.displayName}
                      className="input input-bordered"
                      required
                    />
                    <input
                      type="text"
                      name="userEmail"
                      defaultValue={user?.email}
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-blue-300 ">Add Income</button>
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
