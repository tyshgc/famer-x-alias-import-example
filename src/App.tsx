import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "components/Button";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button label="Please Click!" />
      </header>
    </div>
  );
};

export default App;
