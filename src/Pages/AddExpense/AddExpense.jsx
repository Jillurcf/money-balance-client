import axios from "axios";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AddExpense = () => {
  const { user } = UseAuth();
  const [addedFood, setaddedFood] = useState([]);

  console.log(user);
  const food = useLoaderData([]);
  const [allFodd, setAllFood] = useState(food);
  console.log(allFodd);
  //   const addedFood = useLoaderData()
  // console.log(addedFood);
  // const {email }= useParams()

  useEffect(() => {
    if (user) {
      // console.log(email);
      fetch(
        `http://localhost:5000/api/v1/allExpense/${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => setaddedFood(data));
    }
  }, [user]);

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
      "http://localhost:5000/api/v1/addExpense",
      addIncome,
      { withCredentials: true }
    );
    Swal.fire("Expense added");
    e.target.reset();
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `http://localhost:5000/api/v1/allExpense/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your task has been deleted.",
                "success"
              );
              const remining = allFodd.filter((food) => food._id !== id);
              setAllFood(remining);
            }
          });
      }
    });
  };

  // const handleUpdate = (id)=>{

  // }

  return (
    <div>
      <Helmet>
        <title>MB | Add Expense</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/MpfJv5W/towfiqu-barbhuiya-xk-Arbd-Uc-Ue-E-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="hero min-h-screen ">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="lg:max-w-md max-w-xs">
                  <h1>Task Added By: {user?.displayName}</h1>

                  {/* add food */}
                  {addedFood.map((adFood) => (
                    <div key={adFood._Id} className="overflow-x-auto">
                      <table className="table table-xs">
                        {/* head */}
                        <thead>
                          <tr>
                            <th>
                              <label>
                                <input type="checkbox" className="checkbox" />
                              </label>
                            </th>
                            <th>Food Image</th>
                            <th>Task Name </th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* row 1 */}
                          <tr>
                            <th>
                              <label>
                                <input type="checkbox" className="checkbox" />
                              </label>
                            </th>
                            <td>
                              <div className="flex items-center space-x-3">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-12 h-12">
                                    <img
                                      src={adFood.food_image}
                                      alt="Avatar Tailwind CSS Component"
                                    />
                                  </div>
                                </div>
                                <div></div>
                              </div>
                            </td>
                            <td>
                              {adFood.food_name} <br />
                              Origin: {adFood.origin}
                            </td>
                            <td>Price: ${adFood.price}</td>
                            <td>
                              <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                                <button className="btn btn-active">
                                  <Link to={`/updateFood/${adFood._id}`}>
                                    {" "}
                                    Update
                                  </Link>
                                </button>
                                <button
                                  onClick={() => handleDelete(adFood._id)}
                                  className="btn"
                                >
                                  X
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
                <div className="hero min-h-screen">
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                    <form onSubmit={handleAddExpense} className=" mt-36 card-body">
                      <h1 className="text-2xl font-bold">
                        Please add a Expense
                      </h1>
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
                          <span className="label-text">Added By</span>
                        </label>
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
                      <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Expense</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;