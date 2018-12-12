import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../../actions/itemActions";

class App extends Component {
  state = {
    name: "",
    genre: "",
    indexes: {
      index1: "",
      index2: "",
      index3: "",
      index4: "",
      index5: "",
      index6: "",
      index7: "",
      index8: "",
      index9: "",
      index10: "",
      index11: "",
      index12: "",
      index13: "",
      index14: "",
      index15: "",
      index16: ""
    }
  };

  onChange = e => {
    if (e.target.name.indexOf("indexes") === 0) {
      this.setState({
        indexes: Object.assign(this.state.indexes || {}, {
          [e.target.name.replace(/^indexes\./, "")]: e.target.value
        })
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
    // this.setState({ [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
      genre: this.state.genre,
      indexes: this.state.indexes,
      index1: this.state.indexes.index1,
      index2: this.state.indexes.index2,
      index3: this.state.indexes.index3,
      index4: this.state.indexes.index4,
      index5: this.state.indexes.index5,
      index6: this.state.indexes.index6,
      index7: this.state.indexes.index7,
      index8: this.state.indexes.index8,
      index9: this.state.indexes.index9,
      index10: this.state.indexes.index10,
      index11: this.state.indexes.index11,
      index12: this.state.indexes.index12,
      index13: this.state.indexes.index13,
      index14: this.state.indexes.index14,
      index15: this.state.indexes.index15,
      index16: this.state.indexes.index16
    };
    this.props.addItem(newItem);

    //NODEMAILER
  };

  render() {
    return (
      <div>
        <br />
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            name="genre"
            placeholder="genero"
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            name="indexes.index1"
            placeholder="sample 1"
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            name="indexes.index2"
            placeholder="sample 2"
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            name="indexes.index3"
            placeholder="sample 3"
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            name="indexes.index4"
            placeholder="sample 4"
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            name="indexes.index5"
            placeholder="sample 5"
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            name="indexes.index6"
            placeholder="sample 6"
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            name="indexes.index7"
            placeholder="sample 7"
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            name="indexes.index8"
            placeholder="sample 8"
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            name="indexes.index9"
            placeholder="indexes.index9"
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            name="indexes.index10"
            placeholder="sample 10"
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            name="indexes.index11"
            placeholder="sample 11"
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            name="indexes.index12"
            placeholder="sample 12"
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            name="indexes.index13"
            placeholder="sample 13"
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            name="indexes.index14"
            placeholder="sample 14"
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            name="indexes.index15"
            placeholder="sample 15"
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            name="indexes.index16"
            placeholder="sample 16"
            onChange={this.onChange}
          />
          <br />
          <br />
          <button>ADD</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(App);
