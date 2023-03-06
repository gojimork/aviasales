import TransplantFilter from "./transplant-filter.js";
import PriorityFilter from "./priority-filter.js";
import "./App.scss";
import logo from "../assets/logo.svg";
import Tickets from "./tickets.js";

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <div className="header">
          <img src={logo} alt="logo" />
        </div>
        <div className="main">
          <TransplantFilter />
          <PriorityFilter />
          <Tickets />
        </div>
      </div>
    </div>
  );
}

export default App;
