import React from "react";
import { Routes, Route } from "react-router-dom";

import Index from "./index";
import About from "./about";

export default function Page() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}
