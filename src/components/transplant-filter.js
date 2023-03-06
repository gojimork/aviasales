import { connect } from "react-redux";

const TransplantFilter = ({ transfers, onAllClick }) => {
  const filterData = [
    { text: "Все", id: "all" },
    { text: "Без пересадок", id: "withoutTransfers" },
    { text: "1 пересадка", id: "oneTransfer" },
    { text: "2 пересадки", id: "twoTransfers" },
    { text: "3 пересадки", id: "threeTransfers" },
  ];
  const transfersNodes = filterData.map(({ text, id }) => (
    <li key={id}>
      <label>
        <input
          onChange={onAllClick}
          checked={transfers[id]}
          type="checkbox"
          className="input visuable-hidden"
        />
        <span className="checker"></span>
        {text}
      </label>
    </li>
  ));
  return (
    <div className="sidebar">
      <h3>Количество пересадок</h3>
      <form>
        <ul>{transfersNodes}</ul>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    transfers: state.transfers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAllClick: () => dispatch({ type: "all" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransplantFilter);
