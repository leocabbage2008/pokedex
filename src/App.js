import "./App.css";
import React from "react";
import axios from "axios";
import Grid from "./components/Grid";
import Popup from "./components/Popup";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [{ name: "0" }],
      popup: false,
      popupText: "",
      img1: "",
      img2: "",
    };
  }
  componentDidMount() {
    const onMount = async () => {
      await axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=1000")
        .then((res) => {
          const resp = res.data.results;
          this.setState({ content: resp });
        });
    };
    onMount();
  }
  clickHandler = (t, i) => {
    const dup = this.state;
    dup.popup = true;
    dup.popupText = t;
    dup.img1 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      i + 1
    }.png`;
    dup.img2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
      i + 1
    }.png`;
    this.setState(dup);
  };
  render() {
    return (
      <div className="App">
        <h1>HTTPS requests</h1>
        <h2>Async await</h2>
        <h2>Promises</h2>
        <h1>Pokemon's index</h1>
        <Grid content={this.state.content} clickHandler={this.clickHandler} />
        <Popup
          text={this.state.popupText}
          display={this.state.popup}
          clickHandler={() => {
            const dup = this.state;
            dup.popup = false;
            this.setState(dup);
          }}
          img1={this.state.img1}
          img2={this.state.img2}
        />
      </div>
    );
  }
}

export default App;
