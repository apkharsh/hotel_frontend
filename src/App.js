import { Route, Routes, Navigate, Link, useLocation } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Cancellation from "./Pages/Cancellation/Cancellation";
import BookIcon, {
  ArrowRight,
  CancelIcon,
  DashboardIcon,
  RoomsIcon,
} from "./Components/Icons";
import BookingTemp from "./Components/BookingTemp";
import Rooms from "./Pages/Rooms/Rooms";

function App() {
  const route = useLocation().pathname;
  const links = [
    {
      id: 1,
      name: "Dashboard",
      route: "/",
      icon: <BookIcon className="w-6 h-6" />,
    },
    {
      id: 2,
      name: "Booking",
      route: "/booking",
      icon: <DashboardIcon className="w-[19px] h-[19px]" />,
    },
    {
      id: 3,
      name: "Cancellation",
      route: "/cancel",
      icon: <CancelIcon className="w-7 h-7" />,
    },
    {
      id: 4,
      name: "Rooms",
      route: "/rooms",
      icon: <RoomsIcon className="w-6 h-6" />,
    },
  ];

  return (
    <div className="text-black">
      <div className="flex">
        {/* Side-panel */}
        <div className="xl:w-[18rem] h-full min-h-screen px-2 py-9 hidden md:flex flex-col gap-10 ">
          <h1 className="font-bold text-2xl px-2"> Appointment </h1>

          <div className="flex flex-col gap-1">
            {links.map((item) => {
              return (
                <Link
                  to={item.route}
                  className={`flex justify-between gap-1 items-center bg-blue-200 outline-none py-3 px-2 rounded-xl hover:scale-105 ease-linear transition-all`}
                  key={item.id}
                >
                  <div className="flex gap-2 items-center">
                    <div className="w-7 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <p> {item.name} </p>
                  </div>
                  <div>
                    <ArrowRight className="w-[15px] h-[15px]" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Content View */}
        <div className="p-5 md:p-5 lg:p-10 w-full min-h-screen shadow-xl shadow-p2 rounded-xl bg-p1 bg-opacity-20 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/booking" element={<BookingTemp />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/cancel" element={<Cancellation />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
