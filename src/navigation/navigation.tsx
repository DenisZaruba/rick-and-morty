import Home from "../pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />} />

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
