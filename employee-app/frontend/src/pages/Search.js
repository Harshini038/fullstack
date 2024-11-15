import React, { useState } from "react";
import axios from "axios";

function SearchEmp() {
  const [employeeID, setEmployeeID] = useState("");
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/search/${employeeID}`);
      setEmployee(res.data);
      setError("");
    } catch (error) {
      setEmployee(null);
      setError("Employee not found");
    }
  };

  return (
    <div>
      <h4>Enter ID to search employee</h4>
      <label>ID:</label>
      <input
        type="number"
        placeholder="id"
        name="id"
        onChange={(e) => {
          setEmployeeID(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Search Employee</button>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {employee && (
        <div>
          <h5>Employee details</h5>
          <p>Name: {employee.EmployeeName}</p>
          <p>Designation: {employee.Designation}</p>
          <p>Department: {employee.Department}</p>
          <p>JoiningDate: {employee.JoiningDate}</p>
        </div>
      )}
    </div>
  );
}

export default SearchEmp;
