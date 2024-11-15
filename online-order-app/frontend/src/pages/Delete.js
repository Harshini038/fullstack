import React, { useState } from "react";
import axios from "axios";

function DeleteOrder() {
  const [orderID, setOrderID] = useState("");

  const handleDelete = async (e) => {
    try {
      await axios.delete(`http://localhost:5000/delete/${orderID}`);
      alert("order deleted successfully");
    } catch (error) {
      alert("Error deleting");
    }
  };

  return (
    <div>
      <input
        type="text"
        name="orderID"
        value={orderID}
        onChange={(e) => setOrderID(e.target.value)}
      ></input>
      <button onClick={handleDelete}>Delete order</button>
    </div>
  );
}
export default DeleteOrder;
