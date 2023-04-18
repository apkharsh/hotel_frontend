import React from "react";
import Table from "./Components/Table";
import AdminCard from "./Components/AdminCard";

export default function Dashboard() {
  let date = new Date();
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-5xl font-black ">Dashboard </h1>
        </div>

        <div className="border-y border-gray-200 py-5">
          <AdminCard />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold"> Availablity Check </h2>
              <p className="text-gray-500 text-[14px]">{date.toDateString()}</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-gray-500">Sort By</p>
              <select
                className="border border-gray-400 rounded-md p-1 outline-none"
                name="filter"
                id=""
              >
                <option value="all">All</option>
                <option value="booked">Booked</option>
                <option value="waiting">Waiting</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="w-full h-full overflow-auto">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}
