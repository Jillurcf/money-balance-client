import { SlGraph } from "react-icons/sl";
import BalanceTrends from "./BalanceTrends/BalanceTrends";
const DashBoardContents = () => {
  return (
    <div className="py-8 px-3 lx:px-0">
      <h1 className="text-blue-800 font-bold text-4xl">Dasboard</h1>
      <p className="text-blue-800 font-bold">Welcome Money Balance Process</p>
      <div className="grid gap-4 lg:grid-cols-4 py-8">
        <div className="bg-blue-50 p-4 rounded-lg text-blue-500 font-bold">
          <p>Total Balance</p>
          <h1 className="text-3xl">$ 50000</h1>
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
          <h1 className="text-3xl">$ 50000</h1>
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
          <h1 className="text-3xl">$ 50000</h1>
          <div className="divider divider-start"></div>
          <div className="flex gap-2 text-gray-400">
            <SlGraph className="text-green-600 text-3xl font-bold" ></SlGraph>
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
        <div className="bg-blue-300 h-auto lg:w-96 rounded-lg mt-4 lg:mt-0">
          <h1 className="p-4 text-center text-blue-600 font-bold">
           
            Monthly Expenses Breakdown
          </h1>
          {/* food */}
          <div className="flex justify-between">
            <div className="p-4 flex gap-2">
              <div className="h-4">
                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
              </div>
              <div>
                <h2 className="-mt-1">Food</h2>
              </div>
            </div>
            <div className="p-4 flex gap-4">
              <div className="h-4">$1200</div>
              <div>
                <h2>38%</h2>
              </div>
            </div>
          </div>
          <hr className="mx-4" />
          {/* Clothes */}
          <div className="flex justify-between">
            <div className="p-4 flex gap-2">
              <div className="h-4">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
              <div>
                <h2 className="-mt-1">Clothes</h2>
              </div>
            </div>
            <div className="p-4 flex gap-4">
              <div className="h-4">$1200</div>
              <div>
                <h2>38%</h2>
              </div>
            </div>
          </div>
          <hr className="mx-4" />
          {/* Healthcare */}
          <div className="flex justify-between">
            <div className="p-4 flex gap-2">
              <div className="h-4">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
              </div>
              <div>
                <h2 className="-mt-1">House Rents</h2>
              </div>
            </div>
            <div className="p-4 flex gap-4">
              <div className="h-4">$1200</div>
              <div>
                <h2>38%</h2>
              </div>
            </div>
          </div>
          <hr className="mx-4" />
          {/* Transports */}
          <div className="flex justify-between">
            <div className="p-4 flex gap-2">
              <div className="h-4">
                <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              </div>
              <div>
                <h2 className="-mt-1">Transports</h2>
              </div>
            </div>
            <div className="p-4 flex gap-4">
              <div className="h-4">$1200</div>
              <div>
                <h2>38%</h2>
              </div>
            </div>
          </div>
          <hr className="mx-4" />
          {/* Healthcare */}
          <div className="flex justify-between">
            <div className="p-4 flex gap-2">
              <div className="h-4">
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              <div>
                <h2 className="-mt-1">Health Care</h2>
              </div>
            </div>
            <div className="p-4 flex gap-4">
              <div className="h-4">$1200</div>
              <div>
                <h2>38%</h2>
              </div>
            </div>
          </div>
          <hr className="mx-4" />
          {/* Education */}
          <div className="flex justify-between">
            <div className="p-4 flex gap-2">
              <div className="h-4">
                <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
              </div>
              <div>
                <h2 className="-mt-1">Education</h2>
              </div>
            </div>
            <div className="p-4 flex gap-4">
              <div className="h-4">$1200</div>
              <div>
                <h2>38%</h2>
              </div>
            </div>
          </div>
          <hr className="mx-4" />
          {/* Entertainments */}
          <div className="flex justify-between">
            <div className="p-4 flex gap-2">
              <div className="h-4">
                <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              </div>
              <div>
                <h2 className="-mt-1">Entertainments</h2>
              </div>
            </div>
            <div className="p-4 flex gap-4">
              <div className="h-4">$1200</div>
              <div>
                <h2>38%</h2>
              </div>
            </div>
          </div>
          <hr className="mx-4" />
          {/* Others */}
          <div className="flex justify-between">
            <div className="p-4 flex gap-2">
              <div className="h-4">
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
              </div>
              <div>
                <h2 className="-mt-1">Others</h2>
              </div>
            </div>
            <div className="p-4 flex gap-4">
              <div className="h-4">$1200</div>
              <div>
                <h2>38%</h2>
              </div>
            </div>
          </div>
          <hr className="mx-4" />
        </div>
      </div>
    </div>
  );
};

export default DashBoardContents;
