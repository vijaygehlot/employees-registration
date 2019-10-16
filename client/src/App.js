import React, { Component } from "react";

import "./App.css";

import Users from "./components/users/Users";

class App extends Component {
  constructor() {
    super();
    this.state = {
      employeeslist: []
      
    };
    this.onAdd = this.onAdd.bind(this);
  }

  componentDidMount() {
    fetch("/employeeslist", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(employeeslist =>
        this.setState({ employeeslist: employeeslist }, () =>
          console.log("employees fetched...", employeeslist.results)
        )
      );
  }

  onAdd(res) {
    console.log("onAdd-function", res);
    this.state.employeeslist.results.push(res.data[0]);
    this.setState({ employeeslist: this.state.employeeslist});

    console.log("emp", this.state.employeeslist);
  }

  render() {
    if (!this.state.employeeslist.results) return <p>Loading data...</p>;

    return (
      <div className="emp-data">
     
        <Users onAdd={this.onAdd} />
        <div className="box-edit">
        {this.state.employeeslist.results.map(employees => (
          
          <div className="box-1" key={employees.empID}>
            <h2>{employees.name}</h2>
            <p className="emp-info">
              Email:<span>{employees.email}</span>
            </p>
            <p className="emp-info">
              Phone: <span>{employees.number}</span>
            </p>
            <p className="emp-info">
              Location: <span>{employees.location}</span>
            </p>
            <p className="emp-info">
              Company: <span>{employees.company}</span>
            </p>
            <p className="emp-info">
              About: <span>{employees.about}</span>
            </p>
          </div>
        ))}
      
      </div></div>
    );
  }
}

export default App;
