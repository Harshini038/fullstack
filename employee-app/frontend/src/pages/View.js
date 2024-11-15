import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewEmp() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await axios.get("http://localhost:5000/getemp");
        setEmployees(res.data);
      } catch (error) {
        alert("error fetching employees");
      }
    };
    fetchEmployee();
  }, []);

  return (
    <div>
      <h2>Employee details</h2>
      {employees.length > 0 ? (
        <table border={"1"}>
          <tr>
            <th>Employee Name</th>
            <th>Employee ID</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Joining Date</th>
          </tr>
          {employees.map((employee) => {
            return (
              <tr>
                <td>{employee.EmployeeName}</td>
                <td>{employee.EmployeeId}</td>
                <td>{employee.Designation}</td>
                <td>{employee.Department}</td>
              </tr>
            );
          })}
        </table>
      ) : (
        <p>No records found!</p>
      )}
    </div>
  );
}

export default ViewEmp;
