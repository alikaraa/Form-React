import React from "react";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import "./App.css";
import AddUser from "./components/AddUser";


class App extends React.Component {
  

  render() {
    return (
      <div className="container">
        <Navbar title="User App" />
        <hr />
        <AddUser/>
        <Users />
      </div>
    );
  }
}
export default App;
