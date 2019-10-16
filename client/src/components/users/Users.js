import React, { Component } from "react";
import "./users.css";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      number: "",
      location: "",
      company: "",
      about: ""
    };
    
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  async submitForm (e) {
    e.preventDefault();
    

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };

    const url = "/employee";

    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.number === "" ||
      this.state.location === "" ||
      this.state.company === "" ||
      this.state.about === ""
    ) {
      alert("Please fill all the fields");
    } else {
       await fetch(url, config)
       .then( r => r.json())
      .then(res => {
        this.props.onAdd(res);
        
      })

        this.setState({
        name: "",
        email: "",
        number: "",
        location: "",
        company: "",
        about: ""
      });
    }
   
   
    
  }
  

  render() {
    
    return (
     
     
      <div >
        <h1>Employee form!</h1>
        <div>
          <form onSubmit={this.submitForm}>
            <input
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />

            <input
              type="text"
              placeholder="E-mail"
              id="email"
              name="email"
              onChange={this.onChange}
              value={this.state.email}
            />

            <input
              type="text"
              placeholder="Number"
              id="number"
              name="number"
              onChange={this.onChange}
              value={this.state.number}
            />

            <input
              type="text"
              placeholder="Location"
              id="location"
              name="location"
              onChange={this.onChange}
              value={this.state.location}
            />

            <input
              type="text"
              placeholder="Company"
              id="company"
              name="company"
              onChange={this.onChange}
              value={this.state.company}
            />

            <textarea
              type="text"
              placeholder="About"
              id="about"
              name="about"
              onChange={this.onChange}
              value={this.state.about}
            />

            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div> 
    

  );
    
  }
}
