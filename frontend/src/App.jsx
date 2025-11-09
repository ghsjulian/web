import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layouts from "./layouts/Layouts";
import Dashboard from "./pages/Dashboard";
import AdminLogin from "./pages/AminLogin";
import UsersPage from "./pages/UsersPage"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Dashboard />} />
          <Route path="/users" element={<UsersPage/>}/>
        </Route>
        <Route path="/admin-login" element={<AdminLogin/>}/>
      </Routes>
    </Router>
  );
};

export default App;
