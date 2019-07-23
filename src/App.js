import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">My travels</h1>
          </header>
          <Travels
              destination="Zadar"
              country="Croatie"
              image="https://croatia.hr/sites/default/files/styles/image_full_width/public/beaches/01-ZADAR-Borik-DJI_0001_ACR-aleksandar-gospic.jpg?itok=5mqXeioS"
              distance="Trop loin"
          />
          <Travels
              destination="Londres"
              country="Angleterre"
              image="https://img-4.linternaute.com/EJwrJtqS8UseZNofJUkmhg4FHd4=/660x366/smart/ba429abadd8a4731be516a2465ca749f/ccmcms-linternaute/10993851.jpg"
              distance="Moins loin"
          />
        </div>
    );
  }
}

export default App;