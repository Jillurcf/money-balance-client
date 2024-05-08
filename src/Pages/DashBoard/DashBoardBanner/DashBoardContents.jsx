import { SlGraph } from "react-icons/sl";
import BalanceTrends from "./BalanceTrends/BalanceTrends";
import MonthlyExpense from "./MonthlyExpense/MonthlyExpense";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import MonthlyBudget from "./MonthlyBudget/MonthlyBudget";
import IncomeVsExpense from "./IncomeVsExpense/IncomeVsExpense";
import { AuthContext } from "../../../Providers/AuthProvider";
const DashBoardContents = () => {
  const {user} = useContext(AuthContext)
  console.log(user)
  const [incomeData, setIncomeData] = useState(0);
  console.log(incomeData);
  const [expenseData, setExpenseData] = useState(0);
  console.log(incomeData.totalIncome);
  useEffect(() => {
    axios.get(`https://money-balance-server.vercel.app/api/v1/totalIncome/${user?.email}`)
      .then(response => {
        setIncomeData(response.data);
      })
      .catch(error => {
        console.error('Error occurred while fetching sum data:', error);
      });
  }, []);

  // Expense data
  useEffect(() => {
    axios.get(`https://money-balance-server.vercel.app/api/v1/allExpenses/${user?.email}`)
      .then(response => {
        setExpenseData(response.data);
      })
      .catch(error => {
        console.error('Error occurred while fetching sum data:', error);
      });
  }, []);

const totalBlance = incomeData.totalIncome - expenseData.totalIncome;
console.log(totalBlance);
  return (
    <div className="py-8 px-3 lx:px-0">
      <h1 className="text-blue-800 font-bold text-4xl">Dasboard</h1>
      <p className="text-blue-800 font-bold">Welcome Money Balance Process</p>
      <div className="grid gap-4 lg:grid-cols-4 py-8">
        <div className="bg-blue-50 p-4 rounded-lg text-blue-500 font-bold">
          <p>Total Balance</p>
          <h1 className="text-3xl">$ {totalBlance}</h1>
          <div className="divider divider-start"></div>
          <div className="flex gap-2 text-gray-400">
            <SlGraph className="text-green-600 text-3xl font-bold"></SlGraph>
            <p>3.6% </p>
            <p>Last Month</p>
            <p>$36.478</p>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-blue-500 font-bold">
          <p>Total Expense</p>
          <h1 className="text-3xl">$ {expenseData.totalIncome}</h1>
          <div className="divider divider-start"></div>
          <div className="flex gap-2 text-gray-400">
            <SlGraph className="text-green-600 text-3xl font-bold"></SlGraph>
            <p>3.6% </p>
            <p>Last Month</p>
            <p>$36.478</p>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg text-blue-500 font-bold">
          <p>Total Income</p>
          <h1 className="text-3xl">$ {incomeData.totalIncome}</h1>
          <div className="divider divider-start"></div>
          <div className="flex gap-2 text-gray-400">
            <SlGraph className="text-green-600 text-3xl font-bold"></SlGraph>
            <p>3.6% </p>
            <p>Last Month</p>
            <p>$36.478</p>
          </div>
        </div>
      </div>
      {/* Balance trend start */}
      <div className="lg:flex gap-4">
        <div className="bg-blue-100 rounded-lg">
          <div className="flex justify-between max-w-[800px] pr-12">
            <div className="">
              <h1 className="px-8 pt-6 text-blue-600 font-bold">
                Balance Trends
              </h1>
              <h1 className="text-blue-600 font-bold text-4xl px-8 pb-6">
                $3253
              </h1>
            </div>
            <div className="">
              <h1 className=" pt-6 text-blue-600 font-bold">Last Month</h1>
              <div className="flex">
                <SlGraph className="text-xl text-blue-600"></SlGraph>
                <h1 className="text-blue-600 font-bold text-xl pb-6">12.87%</h1>
              </div>
            </div>
          </div>
          <div className="flex gap-24">
            <div className=" w-[800px] h-80">
              <BalanceTrends></BalanceTrends>
            </div>
          </div>
        </div>

        {/* Monthly expenses breakdown start */}
        <MonthlyExpense></MonthlyExpense>
      </div>
    


      <div className="lg:flex gap-4 mt-12">
          {/* Monthly Budegth Part start */}
      <MonthlyBudget></MonthlyBudget>
        <div className="bg-blue-100 rounded-lg">
        <h1 className="px-8 text-blue-400 font-bold py-12 text-2xl">Monthly Income vs Expense</h1>
          <div className="flex gap-24">
           
            <div className=" w-[800px] h-80">
              <IncomeVsExpense></IncomeVsExpense>
            </div>
          </div>
        </div>

        {/* Monthly expenses breakdown start */}
      
      </div>
    </div>
  );
};

export default DashBoardContents;
