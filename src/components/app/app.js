import TransplantFilter from "../transplant-filter/transplant-filter.js";
import PriorityFilter from "../priority-filter/priority-filter.js";
import "./app.scss";
import logo from "../../assets/logo.svg";
import Tickets from "../tickets/tickets.js";

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
