import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CancelIcon2, EditIcon } from "../../Components/Icons";
import { Link } from "react-router-dom";

export default function Cancellation() {
  const headings = [
    {
      id: 1,
      name: "Room",
    },
    {
      id: 2,
      name: "Customer",
    },
    {
      id: 3,
      name: "Check-in",
    },
    {
      id: 4,
      name: "Check-out",
    },
    {
      id: 5,
      name: "Amount",
    },
    {
      id: 6,
      name: "Actions",
    },
  ];
  return (
    <motion.div className="w-full border h-[max-content] shadow rounded-xl scrollbar-hide overflow-x-auto ">
      <table className="w-full min-w-[10rem] overflow-auto">
        <thead className="bg-zinc-100 bg-opacity-50">
          <tr>
            {headings.map((item) => {
              return (
                <td
                  key={item.id}
                  className={`py-3 px-4 min-w-[150px] text-zinc-600 
                    ${item.name === "Actions" && "min-w-[70px]"}
                  `}
                >
                  <p>{item.name}</p>
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody className="text-black text-[14px]">
          <tr className="border-b">
            <td className="py-2 px-4">A</td>
            <td className="py-2 px-4">A</td>
            <td className="py-2 px-4">A</td>
            <td className="py-2 px-4">A</td>
            <td className="py-2 px-4">A</td>

            {/* actions */}
            <td className="py-2 px-4 w-[70px]">
              <div className="flex gap-5 items-center">
                <Link
                  to="./edit/1234"
                  className="hover:shadow-xl hover:scale-105 transition-all ease-linear rounded-full bg-blue-100 p-1"
                >
                  <EditIcon className="w-6 h-6" />
                </Link>

                <Link
                  to="./cancel/1234"
                  className="hover:shadow-xl hover:scale-105 transition-all ease-linear rounded-full bg-red-100 p-1"
                >
                  <CancelIcon2 className="w-6 h-6" />
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
}
