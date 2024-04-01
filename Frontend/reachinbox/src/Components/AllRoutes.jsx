import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Spam from "../Pages/Spam";
import Bin from "../Pages/Bin";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/spam" element={<Spam />} />
      <Route path="/bin" element={<Bin />} />
      {/* <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} /> */}
    </Routes>
  );
};

export default AllRoutes;
