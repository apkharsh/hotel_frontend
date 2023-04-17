import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import BookingTemp from "../Components/BookingTemp";
import BookNow from "../Pages/Booking/BookNow";
import BookLater from "../Pages/Booking/BookLater";

export default function Booking() {
  return (
    <BookingTemp>
      <Routes>
        <Route path="/now" element={<BookNow />} />
        <Route path="/later" element={<BookLater />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BookingTemp>
  );
}
