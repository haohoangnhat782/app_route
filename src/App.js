import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Form/Login.js";
import Register from "./pages/Form/Register.js";

import Home from "./pages/Home";
import Sidebar from "./pages/sidebar";
import DynamicContent from "./pages/DynamicContent";
import Todolist from "./pages/TodoUseReducer";
import Theme from "./pages/ThemeUseContext";
import CDTimer from "./pages/CountdownTimer";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/todolist" element={<Todolist />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="/CountdownTimer" element={<CDTimer />} />
          <Route path="/DynamicContent" element={<DynamicContent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
