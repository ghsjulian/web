import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layouts from "./layouts/Layouts";
import Dashboard from "./pages/Dashboard";
import AdminLogin from "./pages/AminLogin";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/admin-login" element={<AdminLogin/>}/>
      </Routes>
    </Router>
  );
};

export default App;
