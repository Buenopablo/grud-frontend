import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../home/Home";
import UserGrud from "../user/UserGrud";

export default (props) => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/users" element={<UserGrud />} />
    <Route path="*" element={<Home />} />
  </Routes>
);
