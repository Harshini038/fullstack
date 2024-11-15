import React, { useState } from "react";
import axios from "axios";

function UpdateEmp() {
  const [employeeID, setEmployeeID] = useState("");
  const [designation, setDesignation] = useState("");

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/update/${employeeID}`, {
        Designation: designation,
      });
      alert("Designation updated successfully");
    } catch (error) {
      alert("couldnt update designation");
    }
  };

  return (
    <div>
      <h3>Update employee</h3>
      <label>ID:</label>
      <input
        type="number"
        placeholder="id"
        name="id"
        onChange={(e) => setEmployeeID(e.target.value)}
      />

      <label>Enter new designation:</label>
      <input
        type="text"
        placeholder="new designation"
        name="designation"
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
      />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UpdateEmp;
