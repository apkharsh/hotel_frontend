import React from "react";

export default function Table() {

  
  
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/api/bookings/all");

    var dataLocal = await response.json();

    // change checkInTime and checkOutTime from unix to date and time
    dataLocal.filtered_bookings.forEach((item) => {
      // if current time is between checkInTime and checkOutTime then status = "checked in"
      // else if current time is after checkOutTime then status = "checked out"
      // else status = "not checked in"
      const currentTime = new Date().getTime();
      const checkInTime = new Date(item.checkInTime * 1000).getTime();
      const checkOutTime = new Date(item.checkOutTime * 1000).getTime();
      
      if(currentTime >= checkInTime && currentTime <= checkOutTime) item.status = "checked in";
      else if(currentTime > checkOutTime) item.status = "checked out";
      else item.status = "not checked in";
      
      item.checkInTime = new Date(item.checkInTime * 1000).toLocaleString();
      item.checkOutTime = new Date(item.checkOutTime * 1000).toLocaleString();
    });

    setData(dataLocal.filtered_bookings);
  };
  // use effect
  React.useEffect(() => {
    fetchData();
  }, []);


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
      <thead className="bg-zinc-100 bg-opacity-50">
        <tr>
          {headings.map((item) => {
            return (
              <td
                key={item.id}
                className="py-3 px-4 min-w-[150px] text-zinc-600"
              >
                <p>{item.name}</p>
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody className="bg-white text-black">
        {data.map((item) => {
          return (
            <tr className="border-b" key={item._id}>
              <td className="py-2 px-4">{item.roomID.roomType}</td>
              <td className="py-2 px-4">{item.userName}</td>
              <td className="py-2 px-4">{item.checkInTime}</td>
              <td className="py-2 px-4">{item.checkOutTime}</td>
              <td className="py-2 px-4">{item.totalPrice}</td>
              <td className="py-2 px-4">{item.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
