
import './MonthlyBudget.css'
import { FaCarrot, FaCar, FaCat } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
const MonthlyBudget = () => {
  return (
    <div className="bg-blue-300 h-auto lg:w-96 rounded-lg mt-4 lg:mt-0">
      <div>
        <h1 className="p-4 text-center text-blue-600 font-bold">
          Monthly Budget
        </h1>
        {/* Grocery */}
        <div>
          <div className="flex justify-between">
            <div className="p-4 flex gap-2">
              <div className=" overflow-hidden">
                <FaCarrot className="text-white bg-green-400 rounded-full text-2xl p-1"></FaCarrot>
              </div>
              <div>
                <h2 className="-mt-1">Grocery Stores</h2>
              </div>
            </div>
            <div className="p-4 gap-4">
              <div className="h-4">60/100</div>
            </div>
          </div>
          <div className="px-4 pb-4">
            
            <progress className="progress progress-accent w-56" value="60" max="100" ></progress>
          </div>
          <hr className="mx-4" />
        </div>
        {/* Transportation */}
        <div>
          <div className="flex justify-between">
            <div className="p-4 flex gap-2">
              <div className="h-4">
               <FaCar className="text-white bg-green-600 rounded-full text-2xl p-1"></FaCar>
              </div>
              <div>
                <h2 className="-mt-1">Transportation </h2>
              </div>
            </div>
            <div className="p-4 gap-4">
              <div className="h-4">80/100</div>
            </div>
          </div>
          <div className="px-4 pb-4">
          <progress className="progress progress-success w-56" value="80" max="100" ></progress>
          </div>
          <hr className="mx-4" />
        </div>
        {/* Pets */}
        <div>
          <div className="flex justify-between">
            <div className="p-4 flex gap-2">
              <div className="h-4">
              <FaCat className="text-white bg-sky-500 rounded-full text-2xl p-1"></FaCat>
              </div>
              <div>
                <h2 className="-mt-1">Pets</h2>
              </div>
            </div>
            <div className="p-4 gap-4">
              <div className="h-4">40/100</div>
            </div>
          </div>
          <div className="px-4 pb-4">
          <progress className="progress progress-info w-56" value="40" max="100" ></progress>
          </div>
          <hr className="mx-4" />
        </div>
        {/* Education */}
        <div>
          <div className="flex justify-between">
            <div className="p-4 flex gap-2">
              <div className="h-4">
                <MdCastForEducation className="text-white bg-indigo-700 rounded-full text-2xl p-1" />
              </div>
              <div>
                <h2 className="-mt-1">Education</h2>
              </div>
            </div>
            <div className="p-4 gap-4">
              <div className="h-4">70/100</div>
            </div>
          </div>
          <div className="px-4 pb-4">
          <progress className="progress progress-primary w-56" value="70" max="100" ></progress>
          </div>
          <hr className="mx-4" />
        </div>
        {/* Clothes */}
        <div>
          <div className="flex justify-between">
            <div className="p-4 flex gap-2">
              <div className="h-4">
               <GiClothes className="text-white bg-yellow-400 rounded-full text-2xl p-1" />
              </div>
              <div>
                <h2 className="-mt-1">Clothes</h2>
              </div>
            </div>
            <div className="p-4 gap-4">
              <div className="h-4">20/100</div>
            </div>
          </div>
          <div className="px-4 pb-4">
          <progress className="progress progress-warning w-56" value="20" max="100" ></progress>
          </div>
          <hr className="mx-4" />
        </div>
      </div>
    </div>
  );
};

export default MonthlyBudget;
