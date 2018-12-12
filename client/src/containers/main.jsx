//DEPENDENCIAS
import React, { Component } from "react";
import { Howl, Howler } from "howler";
import axios from "axios";
//import de estilos
import "./main.css";
import "../components/styles/Styles.css";
//import de componentes
import Logo from "../components/Logo";
import Mail from "../components/Mail/Mail";
import Sampler from "../components/Sampler";
import Sampler2 from "../components/Sampler2";
import Modal from "../components/UI/Modal";
import Add from "../components/Add/Add";
import Select from "../components/Select/Select";
import { connect } from "react-redux";
import { getItems } from "../actions/itemActions";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

class Main extends Component {
  state = {
    sounds: [], //donde se almacenan los datos del json
    banks: [],
    selectedBank: {
      index1: 1,
      index2: 2,
      index3: 3,
      index4: 4,
      index5: 5,
      index6: 6,
      index7: 7,
      index8: 8,
      index9: 10,
      index10: 11,
      index11: 12,
      index12: 13,
      index13: 14,
      index14: 15,
      index15: 16,
      index16: 17
    },

    pressedClass1: false,
    pressedClass2: false,
    pressedClass3: false,
    pressedClass4: false,
    pressedClass5: false,
    pressedClass6: false,
    pressedClass7: false,
    pressedClass8: false,
    pressedClass9: false,
    pressedClass10: false,
    pressedClass11: false,
    pressedClass12: false,
    pressedClass13: false,
    pressedClass14: false,
    pressedClass15: false,
    pressedClass16: false,
    //mostrar o esconder lod modals
    saving: false,
    loading: false,
    editing: false,
    mailing: false
  };

  componentDidMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/sebamacchia/thesamplist/master/thesamplist/src/assets/sounds/sounds2.json"
      )
      .then(response => {
        this.setState({ sounds: response });
        console.log(response.data);
      });

    axios.get("/api/items").then(response => {
      this.setState({ banks: response.data });
    });

    //Para cuando se presiona una tecla
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }

  handleKeyDown = e => {
    if (e.key === "1" && !this.state.loading) {
      this.handlePlaySound1(this.state.selectedBank.index1);
      this.setState({ pressedClass1: true });
    }
    if (e.key === "2" && !this.state.loading) {
      this.handlePlaySound2(this.state.selectedBank.index2);
      this.setState({ pressedClass2: true });
    }
    if (e.key === "3" && !this.state.loading) {
      this.handlePlaySound3(this.state.selectedBank.index3);
      this.setState({ pressedClass3: true });
    }
    if (e.key === "4" && !this.state.loading) {
      this.handlePlaySound4(this.state.selectedBank.index4);
    }
    if (e.key === "q" && !this.state.loading) {
      this.handlePlaySound5(this.state.selectedBank.index5);
    }
    if (e.key === "w" && !this.state.loading) {
      this.handlePlaySound6(this.state.selectedBank.index6);
    }
    if (e.key === "e" && !this.state.loading) {
      this.handlePlaySound7(this.state.selectedBank.index7);
    }
    if (e.key === "r" && !this.state.loading) {
      this.handlePlaySound8(this.state.selectedBank.index8);
    }
    if (e.key === "a" && !this.state.loading) {
      this.handlePlaySound9(this.state.selectedBank.index9);
    }
    if (e.key === "s" && !this.state.loading) {
      this.handlePlaySound10(this.state.selectedBank.index10);
    }
    if (e.key === "d" && !this.state.loading) {
      this.handlePlaySound11(this.state.selectedBank.index11);
    }
    if (e.key === "f" && !this.state.loading) {
      this.handlePlaySound12(this.state.selectedBank.index12);
    }
    if (e.key === "z" && !this.state.loading) {
      this.handlePlaySound13(this.state.selectedBank.index13);
    }
    if (e.key === "x" && !this.state.loading) {
      this.handlePlaySound14(this.state.selectedBank.index14);
    }
    if (e.key === "c" && !this.state.loading) {
      this.handlePlaySound15(this.state.selectedBank.index15);
    }
    if (e.key === "v" && !this.state.loading) {
      this.handlePlaySound16(this.state.selectedBank.index16);
    }
  };

  handleKeyUp = e => {
    if (e.key === "1") {
      this.setState({ pressedClass1: false });
    }
    if (e.key === "2") {
      this.setState({ pressedClass2: false });
    }
    if (e.key === "3") {
      this.setState({ pressedClass3: false });
    }
    if (e.key === "4") {
      this.setState({ pressedClass4: false });
    }
    if (e.key === "q") {
      this.setState({ pressedClass5: false });
    }
    if (e.key === "w") {
      this.setState({ pressedClass6: false });
    }
    if (e.key === "e") {
      this.setState({ pressedClass7: false });
    }
    if (e.key === "r") {
      this.setState({ pressedClass8: false });
    }
    if (e.key === "a") {
      this.setState({ pressedClass9: false });
    }
    if (e.key === "s") {
      this.setState({ pressedClass10: false });
    }
    if (e.key === "d") {
      this.setState({ pressedClass11: false });
    }
    if (e.key === "f") {
      this.setState({ pressedClass12: false });
    }
    if (e.key === "z") {
      this.setState({ pressedClass13: false });
    }
    if (e.key === "x") {
      this.setState({ pressedClass14: false });
    }
    if (e.key === "c") {
      this.setState({ pressedClass15: false });
    }
    if (e.key === "v") {
      this.setState({ pressedClass16: false });
    }
  };

  //creacion de sonidos y ejecucion para cada uno de los PADS
  handlePlaySound1 = i => {
    let link = this.state.sounds.data[i].src;
    console.log(link);
    let sound1 = new Howl({
      src: [link]
    });
    sound1.play();
    this.setState({ pressedClass1: true });
    setTimeout(() => {
      this.setState({ pressedClass1: false });
    }, 100);
  };

  handlePlaySound2 = i => {
    let link = this.state.sounds.data[i].src;
    let sound2 = new Howl({
      src: [link]
    });
    sound2.play();
    this.setState({ pressedClass2: true });
    setTimeout(() => {
      this.setState({ pressedClass2: false });
    }, 100);
  };

  handlePlaySound3 = i => {
    let link = this.state.sounds.data[i].src;
    let sound3 = new Howl({
      src: [link]
    });
    sound3.play();
    this.setState({ pressedClass3: true });
    setTimeout(() => {
      this.setState({ pressedClass3: false });
    }, 100);
  };

  handlePlaySound4 = i => {
    let link = this.state.sounds.data[i].src;
    let sound4 = new Howl({
      src: [link]
    });
    sound4.play();
    this.setState({ pressedClass4: true });
    setTimeout(() => {
      this.setState({ pressedClass4: false });
    }, 100);
  };

  handlePlaySound5 = i => {
    let link = this.state.sounds.data[i].src;
    let sound5 = new Howl({
      src: [link]
    });
    sound5.play();
    this.setState({ pressedClass5: true });
    setTimeout(() => {
      this.setState({ pressedClass5: false });
    }, 100);
  };

  handlePlaySound6 = i => {
    let link = this.state.sounds.data[i].src;
    let sound6 = new Howl({
      src: [link]
    });
    sound6.play();
    this.setState({ pressedClass6: true });
    setTimeout(() => {
      this.setState({ pressedClass6: false });
    }, 100);
  };

  handlePlaySound7 = i => {
    let link = this.state.sounds.data[i].src;
    let sound7 = new Howl({
      src: [link]
    });
    sound7.play();
    this.setState({ pressedClass7: true });
    setTimeout(() => {
      this.setState({ pressedClass7: false });
    }, 100);
  };
  handlePlaySound8 = i => {
    let link = this.state.sounds.data[i].src;
    let sound8 = new Howl({
      src: [link]
    });
    sound8.play();
    this.setState({ pressedClass8: true });
    setTimeout(() => {
      this.setState({ pressedClass8: false });
    }, 100);
  };
  handlePlaySound9 = i => {
    let link = this.state.sounds.data[i].src;
    let sound9 = new Howl({
      src: [link]
    });
    sound9.play();
    this.setState({ pressedClass9: true });
    setTimeout(() => {
      this.setState({ pressedClass9: false });
    }, 100);
  };
  handlePlaySound10 = i => {
    let link = this.state.sounds.data[i].src;
    let sound10 = new Howl({
      src: [link]
    });
    sound10.play();
    this.setState({ pressedClass10: true });
    setTimeout(() => {
      this.setState({ pressedClass10: false });
    }, 100);
  };
  handlePlaySound11 = i => {
    let link = this.state.sounds.data[i].src;
    let sound11 = new Howl({
      src: [link]
    });
    sound11.play();
    this.setState({ pressedClass11: true });
    setTimeout(() => {
      this.setState({ pressedClass11: false });
    }, 100);
  };
  handlePlaySound12 = i => {
    let link = this.state.sounds.data[i].src;
    let sound12 = new Howl({
      src: [link]
    });
    sound12.play();
    this.setState({ pressedClass12: true });
    setTimeout(() => {
      this.setState({ pressedClass12: false });
    }, 100);
  };

  handlePlaySound13 = i => {
    let link = this.state.sounds.data[i].src;
    let sound13 = new Howl({
      src: [link]
    });
    sound13.play();
    this.setState({ pressedClass13: true });
    setTimeout(() => {
      this.setState({ pressedClass13: false });
    }, 100);
  };

  handlePlaySound14 = i => {
    let link = this.state.sounds.data[i].src;
    let sound14 = new Howl({
      src: [link]
    });
    sound14.play();
    this.setState({ pressedClass14: true });
    setTimeout(() => {
      this.setState({ pressedClass14: false });
    }, 100);
  };
  handlePlaySound15 = i => {
    let link = this.state.sounds.data[i].src;
    let sound15 = new Howl({
      src: [link]
    });
    sound15.play();
    this.setState({ pressedClass15: true });
    setTimeout(() => {
      this.setState({ pressedClass15: false });
    }, 100);
  };
  handlePlaySound16 = i => {
    let link = this.state.sounds.data[i].src;
    let sound16 = new Howl({
      src: [link]
    });
    sound16.play();
    this.setState({ pressedClass16: true });
    setTimeout(() => {
      this.setState({ pressedClass16: false });
    }, 100);
  };

  saveHandler = e => {
    this.setState({ saving: false });
  };
  saveCloseHandler = () => {
    this.setState({ saving: false });
  };

  loadHandler = e => {
    this.setState({ loading: true });
  };
  loadCloseHandler = () => {
    this.setState({ loading: false });
  };
  editHandler = () => {
    this.setState({ editing: true });
    axios.get("/api/items").then(response => {
      this.setState({ banks: response.data });
      console.log(this.state.banks);
    });
  };

  editCloseHandler = () => {
    this.setState({ editing: false });
  };

  mailHandler = () => {
    this.setState({ mailing: true });
  };
  mailCloseHandler = () => {
    this.setState({ mailing: false });
  };

  nameChangeHandler = event => {};

  bankAsigmentHandle = e => {
    console.log(e);
    this.setState({ selectedBank: e });
    this.setState({ editing: false });
  };

  render() {
    return (
      <div className="container">
        <div className="item">
          <Logo />
        </div>
        {/* EDITAR */}
        <div className="item" onClick={this.editHandler}>
          EDIT
        </div>
        {/* LOAD DIV */}
        <div className="item" onClick={this.saveHandler} />
        {/* ADD DIV */}
        <div className="item" onClick={this.loadHandler}>
          ADD
        </div>
        <div
          onClick={() => this.handlePlaySound1(this.state.selectedBank.index1)}
        >
          <Sampler title={1} pressed={this.state.pressedClass1} />
        </div>
        <div
          onClick={() => this.handlePlaySound2(this.state.selectedBank.index2)}
        >
          <Sampler title={2} pressed={this.state.pressedClass2} />
        </div>
        <div
          onClick={() => this.handlePlaySound3(this.state.selectedBank.index3)}
        >
          <Sampler title={3} pressed={this.state.pressedClass3} />
        </div>
        <div
          className="Sampler"
          onClick={() => this.handlePlaySound4(this.state.selectedBank.index4)}
        >
          <Sampler title={4} pressed={this.state.pressedClass4} />
        </div>
        <div
          className="Sampler"
          onClick={() => this.handlePlaySound5(this.state.selectedBank.index5)}
        >
          <Sampler title={"Q"} pressed={this.state.pressedClass5} />
        </div>
        <div
          className="Sampler"
          onClick={() => this.handlePlaySound6(this.state.selectedBank.index6)}
        >
          <Sampler title={"W"} pressed={this.state.pressedClass6} />
        </div>
        <div
          className="Sampler"
          onClick={() => this.handlePlaySound7(this.state.selectedBank.index7)}
        >
          <Sampler title={"E"} pressed={this.state.pressedClass7} />
        </div>
        <div
          className="Sampler"
          onClick={() => this.handlePlaySound8(this.state.selectedBank.index8)}
        >
          <Sampler title={"R"} pressed={this.state.pressedClass8} />
        </div>
        <div
          className="Sampler"
          onClick={() => this.handlePlaySound9(this.state.selectedBank.index9)}
        >
          <Sampler title={"A"} pressed={this.state.pressedClass9} />
        </div>
        <div
          className="Sampler"
          onClick={() =>
            this.handlePlaySound10(this.state.selectedBank.index10)
          }
        >
          <Sampler title={"S"} pressed={this.state.pressedClass10} />
        </div>
        <div
          className="Sampler"
          onClick={() =>
            this.handlePlaySound11(this.state.selectedBank.index11)
          }
        >
          <Sampler title={"D"} pressed={this.state.pressedClass11} />
        </div>
        <div
          className="Sampler"
          onClick={() =>
            this.handlePlaySound12(this.state.selectedBank.index12)
          }
        >
          <Sampler title={"F"} pressed={this.state.pressedClass12} />
        </div>
        <div
          className="Sampler"
          onClick={() =>
            this.handlePlaySound13(this.state.selectedBank.index13)
          }
        >
          <Sampler title={"Z"} pressed={this.state.pressedClass13} />
        </div>
        <div
          className="Sampler"
          onClick={() =>
            this.handlePlaySound14(this.state.selectedBank.index14)
          }
        >
          <Sampler title={"X"} pressed={this.state.pressedClass14} />
        </div>
        <div
          className="Sampler"
          onClick={() =>
            this.handlePlaySound15(this.state.selectedBank.index15)
          }
        >
          <Sampler title={"C"} pressed={this.state.pressedClass15} />
        </div>
        <div
          className="Sampler"
          onClick={() =>
            this.handlePlaySound16(this.state.selectedBank.index16)
          }
        >
          <Sampler2 title={"V"} pressed={this.state.pressedClass16} />
        </div>
        <div className="item" onClick={this.mailHandler}>
          MAIL
        </div>
        <div className="item" />
        <div className="item">SELECT FX</div>
        <div className="item">FX</div>
        {/* MOSTRAR MODAL */}
        {this.state.saving ? (
          <Modal
            style={{ visibility: this.state.saving ? "visible" : "hidden" }}
          >
            {/* <Save value={props.state.banks.name} /> */}
            <Select sounds={this.state.sounds.data[0].name} />

            <button onClick={this.saveCloseHandler}>CLOSE</button>
          </Modal>
        ) : null}
        {/* ADD MODAL */}
        {this.state.loading ? (
          <Modal
            style={{ visibility: this.state.loading ? "visible" : "hidden" }}
          >
            <Add />

            {/* <Select options={options}>/></Select> */}
            <br />
            <button onClick={this.loadCloseHandler}>CLOSE</button>
          </Modal>
        ) : null}
        {this.state.editing ? (
          <Modal
            // className="Item"
            style={{
              visibility: this.state.editing ? "visible" : "hidden"
            }}
          >
            <h2>SELECCIONAR UN BANCO DE SONIDOS:</h2>
            {this.state.banks.map(bank => {
              return (
                <li
                  onClick={() => this.bankAsigmentHandle(bank.indexes)}
                  style={{
                    cursor: "pointer",
                    border: "5px solid white",
                    listStyleType: "none",
                    fontFamily: "Roboto",
                    fontSize: "2vmax"
                  }}
                >
                  {bank.name}
                </li>
              );
            })}
            <button onClick={this.editCloseHandler}>CLOSE</button>
          </Modal>
        ) : null}
        {/* MAIL MODAL */}
        {this.state.mailing ? (
          <Modal
          // style={{ visibility: this.state.mailing ? "visible" : "hidden" }}
          >
            <Mail />
            <br />
            <button onClick={this.mailCloseHandler}>CLOSE</button>
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default Main;
