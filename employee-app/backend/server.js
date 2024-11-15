const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

//create db connection
mongoose
  .connect("mongodb://localhost:27017/Employee")
  .then(() => {
    console.log("connected to mongodb!");
  })
  .catch((err) => {
    console.log(err);
  });

//create schema and model
const employeeSchema = new mongoose.Schema({
  EmployeeName: String,
  EmployeeId: Number,
  Designation: String,
  Department: String,
  JoiningDate: Date,
});

const Employee = mongoose.model("Employee", employeeSchema);

//add employee
app.post("/add", async (req, res) => {
  const empData = req.body;
  try {
    const employee = new Employee(empData);
    await employee.save();
    return res.status(201).send("Employee added successfully!");
  } catch (error) {
    return res.status(400).send("Failed to add employee!");
  }
});

//get all emp
app.get("/getemp", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    return res.status(400).send("error fething employees!");
  }
});

//search by id
app.get("/search/:EmployeeId", async (req, res) => {
  try {
    const employee = await Employee.findOne({
      EmployeeId: req.params.EmployeeId,
    });
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).send("employee not found");
    }
  } catch (error) {
    res.status(400).send("error finding employee");
  }
});

//update designation of emp
app.put("/update/:EmployeeId", async (req, res) => {
  try {
    const { Designation } = req.body;
    const employee = await Employee.findOneAndUpdate(
      { EmployeeId: req.params.EmployeeId },
      { Designation },
      { new: true }
    );

    if (employee) {
      res.status(200).send("Updated successfully!");
    } else {
      res.status(404).send("Employee not found");
    }
  } catch (error) {
    res.status(400).send("couldnt update employee!");
  }
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
