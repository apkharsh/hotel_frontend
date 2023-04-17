import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Booking from "./Routes/Booking";
import Cancellation from "./Pages/Cancellation/Cancellation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/booking/*" element={<Booking />} />
        <Route path="/cancel" element={<Cancellation />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
