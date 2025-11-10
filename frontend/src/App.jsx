import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layouts from "./layouts/Layouts";
import Dashboard from "./pages/Dashboard";
import AdminLogin from "./pages/AminLogin";
import UsersPage from "./pages/UsersPage";
import ViewUser from "./pages/ViewUser";
import AddProduct from "./pages/AddProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Dashboard />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/view-user" element={<ViewUser />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Route>
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
