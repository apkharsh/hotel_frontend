import React from "react";

export default function Table() {
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
      name: "Status",
    },
  ];
  return (
    <table className="w-full min-w-[10rem] overflow-auto">
      <thead className="bg-zinc-100">
        <tr>
          {headings.map((item) => {
            return (
              <td
                key={item.id}
                className="py-2 px-2 min-w-[150px] text-zinc-600 border-r"
              >
                <p>{item.name}</p>
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="p-2 ">A</td>
          <td className="p-2">A</td>
          <td className="p-2">A</td>
          <td className="p-2">A</td>
          <td className="p-2">A</td>
          <td className="p-2">A</td>
        </tr>
      </tbody>
    </table>
  );
}
