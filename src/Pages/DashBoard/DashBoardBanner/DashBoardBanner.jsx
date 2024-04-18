import { SlGraph } from "react-icons/sl";
import BalanceTrends from "./BalanceTrends/BalanceTrends";
const DashBoardBanner = () => {
  return (
    <div className="py-8">
      <h1 className="text-blue-800 font-bold text-4xl">Dasboard</h1>
      <p className="text-blue-800 font-bold">Welcome Money Balance Process</p>
      <div className="grid gap-4 lg:grid-cols-4 py-8">
        <div className="bg-blue-50 p-4 rounded-lg">
            <p>Total Balance</p>
            <h1>$ 50000</h1>
            <div className="divider divider-start"></div>
            <div className="flex gap-2">
                <SlGraph></SlGraph>
                <p>3.6% </p>
                <p>Last Month</p>
                <p>$36.478</p>
            </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
            <p>Total Expense</p>
            <h1>$ 50000</h1>
            <div className="divider divider-start"></div>
            <div className="flex gap-2">
                <SlGraph></SlGraph>
                <p>3.6% </p>
                <p>Last Month</p>
                <p>$36.478</p>
            </div>
        </div>
     
        <div className="bg-blue-50 p-4 rounded-lg">
            <p>Total Income</p>
            <h1>$ 50000</h1>
            <div className="divider divider-start"></div>
            <div className="flex gap-2">
                <SlGraph></SlGraph>
                <p>3.6% </p>
                <p>Last Month</p>
                <p>$36.478</p>
            </div>
        </div>
      </div>
      <div className="bg-red-300 w-[600px] h-80">
      <BalanceTrends></BalanceTrends>
      </div>
    </div>
  );
};

export default DashBoardBanner;
