import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import MyHealthID from "./pages/MyHealthID";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/myhealthid" element={<MyHealthID />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
