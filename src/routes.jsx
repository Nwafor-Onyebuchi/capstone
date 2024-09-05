import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/";
import Bookingpage from "./pages/BookPage";
import ConfirmationPage from "./pages/ConfirmPage";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<Bookingpage/>} path="/bookings"/>
      <Route element={<ConfirmationPage/>} path="/confirmation"/>
    </Routes>
  );
};