import React, { useState } from "react";
import avatar from "../../Assets/avatar.png";

export default function BookNow() {
  const [data, setData] = useState({
    username: "",
    email: "",
    roomType: "",
    roomNumber: "",
    startTime: "",
    endTime: "",
  });

  return (
    <form>
      <div className="flex gap-10">
        <div className="flex flex-col gap-10">
          <div>
            <img
              src={avatar}
              alt="profile_picture"
              className="w-24 rounded-full"
            />
          </div>

          <div className="text-md text-gray-500">
            <p> Enter the required information to register. </p>
            <p> These are editable. </p>
          </div>
        </div>

        {/* username, email, roomType, startTime, endTime, roomNumber  */}
        <div className="flex gap-10 justify-between flex-1">
          <div className="flex-1 flex flex-col gap-4">
            {/* Username */}
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-xl">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="ApkHarsh"
                className="outline-none w-full px-2 py-3 border rounded-md shadow focus:shadow-lg transition-all"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-xl">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="harsh.kumar@gmail.com"
                className="outline-none w-full px-2 py-3 border rounded-md shadow focus:shadow-lg transition-all"
              />
            </div>

            {/* Room Details */}
            <div className="flex gap-3">
              <div className="flex-1 flex flex-col gap-2">
                <label htmlFor="" className="text-xl">
                  Room Number
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="outline-none w-full px-2 py-3 border rounded-md shadow focus:shadow-lg transition-all"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label htmlFor="" className="text-xl">
                  Room Type
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="outline-none w-full px-2 py-3 border rounded-md shadow focus:shadow-lg transition-all"
                />
              </div>
            </div>
          </div>

          {/* Check-in-out */}
          <div className="flex-1  flex flex-col justify-center items-center gap-4">
            <div className="rounded-md border px-4 py-5 w-full h-full bg-white flex flex-col justify-between shadow hover:shadow-lg transition-all ease-linear">
              <input
                type="datetime-local"
                name="date"
                id=""
                className="text-2xl font-bold outline-none"
              />
              <p className="text-[16px] text-gray-600"> Check-in </p>
            </div>
            <div className="rounded-md border px-4 py-5 w-full h-full bg-white flex flex-col justify-between shadow hover:shadow-lg transition-all ease-linear">
              <input
                type="datetime-local"
                name="date"
                id=""
                className="text-2xl font-bold outline-none"
              />
              <p className="text-[16px] text-gray-600"> Check-out </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex item-center justify-end mt-5">
        <button className="px-2 w-32 py-3 rounded-md bg-p4 text-white hover:bg-red-500 hover:shadow-xl transition-all">
          Book
        </button>
      </div>
    </form>
  );
}
