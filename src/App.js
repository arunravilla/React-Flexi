import React, { Component } from "react";
import "./App.css";
import Flexi from "./Flexi";
import { flexiConfig, flexiRecursiveConfig } from "./flexiconfig";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: ""
    };
    this.onFlexiSubmit = this.onFlexiSubmit.bind(this);
  }
  onFlexiSubmit(formData) {
    this.setState({ formData: JSON.stringify(formData) });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Domino</h1>
        </header>
        <Flexi
          onSubmit={this.onFlexiSubmit}
          config={flexiRecursiveConfig.items}
        />
        <textarea
          value={this.state.formData}
          placeholder="Form response will be shown here after click on submit button"
        />
      </div>
    );
  }
}

export default App;
