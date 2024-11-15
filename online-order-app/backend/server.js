const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//create mongo db connection
mongoose
  .connect("mongodb://localhost:27017/orders")
  .then(() => {
    console.log("connected to mongodb successfully!");
  })
  .catch((error) => {
    console.log(error);
  });

//create schema
const orderSchema = new mongoose.Schema({
  orderID: { type: String, unique: true },
  CName: String,
  Product: String,
  Quantity: Number,
  OrderDate: Date,
});

//create model
const Order = new mongoose.model("Orders", orderSchema);

//add order
app.post("/addorder", async (req, res) => {
  const orderdata = req.body;
  try {
    const order = new Order(orderdata);
    await order.save();
    res.status(201).send("order added successfully!");
  } catch (err) {
    res.status(400).send("couldnt place order");
  }
});

//search order by id
app.get("/search/:orderID", async (req, res) => {
  try {
    const order = await Order.findOne({
      orderID: req.params.orderID,
    });
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(400).send("no records found");
    }
  } catch (err) {
    res.send("Error in searching record");
  }
});

//delete order by id
app.delete("/delete/:orderID", async (req, res) => {
  try {
    const order = await Order.findOneAndDelete({
      orderID: req.params.orderID,
    });
    if (order) {
      res.status(200).send("Deleted successfully");
    } else {
      res.status(400).send("No record found");
    }
  } catch (err) {
    res.status(400).send("error");
  }
});

//update order quantity  by orderid
app.put("/update/:orderID", async (req, res) => {
  try {
    const { Quantity } = req.body;
    const order = await Order.findOneAndUpdate(
      { orderID: req.params.orderID },
      { Quantity },
      { new: true }
    );
    if (order) {
      res.status(200).send("updated!");
    } else {
      res.status(404).send("no record found");
    }
  } catch (err) {
    res.status(400).send("error");
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
