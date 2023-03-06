import { connect } from "react-redux";

const TransplantFilter = ({
  transfers,
  onAllChange,
  onWithoutTransfersChange,
}) => {
  const filterData = [
    { text: "Все", key: "all", onChange: onAllChange },
    {
      text: "Без пересадок",
      key: "withoutTransfers",
      onChange: onWithoutTransfersChange,
    },
    { text: "1 пересадка", key: "oneTransfer" },
    { text: "2 пересадки", key: "twoTransfers" },
    { text: "3 пересадки", key: "threeTransfers" },
  ];
  const transfersNodes = filterData.map(({ text, key, onChange }) => (
    <li key={key}>
      <label>
        <input
          onChange={onChange}
          checked={transfers[key]}
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
    onAllChange: () => dispatch({ type: "all" }),
    onWithoutTransfersChange: () => dispatch({ type: "withoutTransfers" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransplantFilter);
