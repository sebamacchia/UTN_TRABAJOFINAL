import React, { Component } from "react";
import uuid from "uuid";
import { connect } from "react-redux";
import { getItems } from "../../actions/itemActions";
import PropTypes from "prop-types";

class Select extends React.Component {
  constructor(props) {
    super();
    this.state = {
      tech: "select"
    };
  }
  handleChange(e) {
    this.setState({
      tech: e.target.value
    });
  }
  render() {
    return (
      <div>
        <select
          id="lang"
          onChange={this.handleChange.bind(this)}
          value={this.state.tech}
        >
          <option value="select">Select a technology</option>
          <option value="Angular">{this.props.sounds}</option>
          <option value="Bootstrap">Bootstrap</option>
          <option value="React">React</option>
        </select>
        <h2>{this.state.tech}</h2>
      </div>
    );
  }
}

export default Select;

// class Select extends Component {
//   componentDidMount() {
//     this.props.getItems();
//   }

//   //   state = {
//   //     items: [
//   //       {
//   //         id: uuid(),
//   //         name: "one",
//   //         category: "drum",
//   //         index1: 1,
//   //         index2: 2,
//   //         index3: 3,
//   //         index4: 4,
//   //         index5: 5,
//   //         index6: 6,
//   //         index7: 7,
//   //         index8: 8,
//   //         index9: 9,
//   //         index10: 1,
//   //         index11: 2,
//   //         index12: 3,
//   //         index13: 4,
//   //         index14: 5,
//   //         index15: 6,
//   //         index16: 7
//   //       },
//   //       {
//   //         id: uuid(),
//   //         name: "two",
//   //         category: "drum",
//   //         index1: 1,
//   //         index2: 2,
//   //         index3: 3,
//   //         index4: 4,
//   //         index5: 5,
//   //         index6: 6,
//   //         index7: 7,
//   //         index8: 8,
//   //         index9: 9,
//   //         index10: 1,
//   //         index11: 2,
//   //         index12: 3,
//   //         index13: 4,
//   //         index14: 5,
//   //         index15: 6,
//   //         index16: 7
//   //       }
//   //     ]
//   //   };

//   clickHandler = name => {
//     console.log(name);
//   };

//   render() {
//     const { items } = this.props.item;
//     return (
//       <div>
//         <ul>
//           {items.map(({ id, name }) => (
//             <li onClick={() => this.clickHandler(name)}>{name}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// Select.propTypes = {
//   getItems: PropTypes.func.isRequired,
//   item: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   item: state.item
// });

// export default connect(
//   mapStateToProps,
//   { getItems }
// )(Select);
