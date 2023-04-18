import React from "react";
import Table from "./Components/Table";
import A from "../../Assets/Rooms/A.png";
import B from "../../Assets/Rooms/B.jpeg";
import C from "../../Assets/Rooms/C.jpg";
import avatar from "../../Assets/avatar.png";

export default function Dashboard() {
  const cards = [
    { id: 1, img: A, type: "Room : A", price: "1000" },
    { id: 2, img: B, type: "Room : B", price: "2000" },
    { id: 3, img: C, type: "Room : C", price: "5000" },
  ];
  let date = new Date();
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-black ">Dashboard </h1>
          <div className="flex gap-3 items-center">
            <img src={avatar} alt="" className="w-7 rounded-full" />
            <h3 className="font-medium text-xl">Admin, Welcome</h3>
          </div>
        </div>

        <div className="flex border-y border-gray-200 py-5 gap-5">
          <div className="rounded-2xl overflow-hidden">
            <h1 className="text-2xl font-medium pb-5">Lodging available</h1>
            <div className="flex gap-5 overflow-x-auto">
              {/* Cards */}
              {cards.map((item) => {
                return (
                  <div className="min-w-[15rem] max-w-[15rem] p-3 rounded-3xl bg-amber-100 flex flex-col gap-2">
                    <div>
                      <img
                        src={item.img}
                        alt="a type room"
                        className="rounded-3xl w-full h-[10rem] object-cover"
                      />
                    </div>
                    <h3 className="px-1">{item.type}</h3>
                    <h2 className="text-2xl px-1 font-semibold flex items-center">
                      {" "}
                      ₹{item.price}{" "}
                      <span className="text-[14px] text-gray-500 font-normal">
                        /per hour
                      </span>{" "}
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>
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
          <div className="w-full h-full overflow-x-auto">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}
