import React, { Component } from "react";
import "../styles/Styles.css";
import axios from "axios";

class Mail extends Component {
  state = {
    name: "",
    email: "",
    msg: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.name);
  };

  handleSubmit = async e => {
    console.log("submit runing");
    e.preventDefault();
    const form = await axios.post("/api/form", {
      name: this.state.name,
      email: this.state.email,
      msg: this.state.msg
    });
  };

  render() {
    return (
      <div className="Mail">
        <h2>MANDAME UN ISMAEL</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <br />
          <input type="text" name="name" onChange={this.handleChange} />
          <br />

          <label htmlFor="email">Tu Ismael:</label>
          <br />
          <input type="email" name="email" onChange={this.handleChange} />
          <br />

          <label htmlFor="message">Mensage:</label>
          <br />
          <textarea
            type="textarea"
            name="msg"
            rows="7"
            cols="30"
            onChange={this.handleChange}
          />
          <br />

          <button>ENVIAR</button>
        </form>
      </div>
    );
  }
}

export default Mail;
