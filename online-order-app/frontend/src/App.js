import "./App.css";
import Addorder from "./pages/Add";
import DeleteOrder from "./pages/Delete";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1> Online ordering System</h1>
      <Addorder />
      <DeleteOrder />
    </div>
  );
}

export default App;
