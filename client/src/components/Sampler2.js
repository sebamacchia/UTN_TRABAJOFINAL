import React from "react";
import "./styles/Styles.css";
import ReactHowler from "react-howler";

const Sampler2 = props => {
  let sampleStyle = {
    fontSize: "6vh",
    backgroundColor: "rgb(250, 250, 250)",
    height: "100%",
    width: "100%",
    border: "0.5px solid rgba(0, 0, 0, 0.2)",
    borderRadius: "3px",
    fontSize: "3vmax",
    fontDisplay: "block",
    verticalAlign: "middle",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  if (props.pressed) {
    sampleStyle = {
      fontSize: "6vh",
      backgroundColor: "rgb(250, 250, 250)",
      height: "100%",
      width: "100%",
      border: "0.5px solid rgba(0, 0, 0, 0.2)",
      borderRadius: "3px",
      fontSize: "3vmax",
      fontDisplay: "block",
      verticalAlign: "middle",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textShadow: "none",
      backgroundColor: "white"
    };
  }

  return (
    <div style={sampleStyle}>
      <p>{props.title}</p>
    </div>
  );
};

export default Sampler2;
