import axios from "axios";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const AddExpense = () => {
  const { user } = UseAuth();
  const [totalIncome, setTotalIncome] = useState(0)
  
  useEffect(() => {
    axios.get(`https://money-balance-server.vercel.app/api/v1/totalIncome/${user?.email}`)
      .then(response => {
        setTotalIncome(response.data);
      })
      .catch(error => {
        console.error('Error occurred while fetching sum data:', error);
      });
  }, []);

  const handleAddExpense = (e) => {
    e.preventDefault();
    const form = e.target;
    const expenseSource = form.expenseSource.value;
    const expenseAmount = form.amount.value;
    const userName = form.userName.value;
    const email = form.userEmail.value;
    const month = form.month.value;
    const year = form.year.value;
    const date = form.date.value;
    const description = form.description.value;

    const addExpense = {
      expenseSource,
      expenseAmount,
      userName,
      email,
      month,
      year,
      date,
      description,
    };
    console.log(addExpense);
    if (expenseAmount < totalIncome ){
      Swal.fire("Balance is low");
    } else{
      axios.post(
        "https://money-balance-server.vercel.app/api/v1/addExpense",
        addExpense,
        { withCredentials: true }
      );
      Swal.fire("Expense added");
      
    }
    
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
