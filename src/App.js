import { Route, Routes, Navigate, Link, useLocation } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Booking from "./Routes/Booking";
import Cancellation from "./Pages/Cancellation/Cancellation";
import BookIcon, {
  ArrowRight,
  CancelIcon,
  DashboardIcon,
} from "./Components/Icons";

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
  ];

  return (
    <div className="text-black">
      <div className="flex">
        {/* Side-panel */}
        <div className="xl:w-[18rem] h-full min-h-screen px-2 py-9 flex flex-col gap-10 ">
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
        <div className="p-10 w-full shadow-xl shadow-p2 rounded-xl bg-p1 bg-opacity-20 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/booking/*" element={<Booking />} />
            <Route path="/cancel" element={<Cancellation />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
