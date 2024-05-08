

const MonthlyExpense = () => {
    return (
        <div>
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
    );
};

export default MonthlyExpense;