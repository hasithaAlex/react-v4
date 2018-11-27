import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

class App extends React.Component {
  TitleClick() {
    alert("Click Adopt Me!");
  }

  render() {
    return (
      <div>
        <h1 onClick={this.TitleClick}>Adopt Me!</h1>
        <Pet name="Dongi" animal="dog" breed="Havanese" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
