import React, { useState } from "react";
import axios from "axios";

function AddEmp() {
  const [employeeData, setEmployeeData] = useState({
    EmployeeName: "",
    EmployeeId: "",
    Designation: "",
    Department: "",
    JoiningDate: "",
  });

  const handleChange = (e) => {
    //eslint-disable-next-line no-restricted-globals
    const { name: fieldName, value } = e.target;
    setEmployeeData({ ...employeeData, [fieldName]: value });
  };

  const handleSubmit = async (e) => {
    try {
      await axios.post("http://localhost:5000/add", employeeData);
      alert("Employee added successfully");
    } catch (error) {
      alert("error adding data");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="EmployeeName"
        placeholder="Employee Name"
        onChange={handleChange}
        required
      ></input>

      <input
        type="number"
        name="EmployeeId"
        placeholder="EmployeeId"
        onChange={handleChange}
        required
      ></input>

      <input
        type="text"
        name="Designation"
        placeholder="Designation"
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="Department"
        placeholder="Department"
        onChange={handleChange}
        required
      />

      <input type="date" name="JoiningDate" onChange={handleChange} required />

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmp;
