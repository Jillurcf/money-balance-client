import axios from "axios";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddExpense = () => {
  const { user } = UseAuth();
  
  const handleAddExpense = (e) => {
    e.preventDefault();
    const form = e.target;
    const incomeSource = form.expenseSource.value;
    const incomeAmount = form.amount.value;
    const userName = form.userName.value;
    const email = form.userEmail.value;
    const description = form.des.value;

    const addIncome = {
      incomeSource,
      incomeAmount,
      userName,
      email,
      description,
    };
    console.log(addIncome);

    axios.post(
      "https://money-balance-server.vercel.app/api/v1/addExpense",
      addIncome,
      { withCredentials: true }
    );
    Swal.fire("Expense added");
    e.target.reset();
  };

 

  return (
    <div className="">
      <Helmet>
        <title>MB | Add Expense</title>
      </Helmet>
    
        {/* <div className="hero-overlay bg-opacity-0"></div> */}
        <div className="hero-content">
          <div className="">
            <div className="hero ">
              
                  <div className="card flex-shrink- ">
                    <form onSubmit={handleAddExpense} className=" mt-36 card-body">
                      <h1 className="text-2xl font-bold">
                        Please add a Expense
                      </h1>
                      <div className="lg:flex gap-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Expense source</span>
                        </label>
                        <input
                          type="text"
                          name="expenseSource"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Expense Amount</span>
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
                          <span className="label-text">Description</span>
                        </label>
                        <input
                          type="text"
                          name="des"
                          className="input input-bordered"
                          // required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Remarks</span>
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

                     
                      <div className="form-control mt-6 ">
                        <button className="btn bg-blue-300">Add Expense</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
    
  );
};

export default AddExpense;
