import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layouts from "./layouts/Layouts";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
