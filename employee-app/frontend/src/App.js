import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AddEmp from "./pages/Add";
import SearchEmp from "./pages/Search";
import UpdateEmp from "./pages/Update";
import ViewEmp from "./pages/View";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Home Page</h1>
        <nav>
          <ul>
            <li>
              <Link to="/add">Add Employee</Link>
            </li>
            <li>
              <Link to="/search">Search Employee</Link>
            </li>
            <li>
              <Link to="/update">update Employee</Link>
            </li>
            <li>
              <Link to="/view">view Employee</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/add" element={<AddEmp />} />
          <Route path="/search" element={<SearchEmp />} />
          <Route path="/update" element={<UpdateEmp />} />
          <Route path="/view" element={<ViewEmp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
