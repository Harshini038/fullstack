import React, { useState } from "react";
import axios from "axios";

function Addorder() {
  const [order, setOrder] = useState({
    orderID: "",
    CName: "",
    Product: "",
    Quantity: "",
    OrderDate: "",
  });

  const handleChange = (e) => {
    const { name: fieldName, value } = e.target;
    setOrder({ ...order, [fieldName]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/addorder", order);
      alert("Order added successfully");
      setOrder({
        orderID: "",
        CName: "",
        Product: "",
        Quantity: "",
        OrderDate: "",
      });
    } catch (err) {
      alert("error");
    }
  };

  return (
    <div>
      <h3>Add order</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="orderID"
          placeholder="Order id"
          onChange={handleChange}
          required
        ></input>

        <input
          type="text"
          name="CName"
          placeholder="Customer name"
          onChange={handleChange}
          required
        ></input>

        <input
          type="text"
          name="Product"
          placeholder="Product"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="Quantity"
          placeholder="Quantity"
          onChange={handleChange}
          required
        />

        <input type="date" name="OrderDate" onChange={handleChange} required />

        <button type="submit">Add Order</button>
      </form>
    </div>
  );
}

export default Addorder;
