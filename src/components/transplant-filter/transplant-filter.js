import { connect } from 'react-redux';
import classes from './transplant-filter.module.scss';

const TransplantFilter = ({
  transfers,
  onAllChange,
  onWithoutTransfersChange,
  onOneTransferChange,
  onTwoTransfersChange,
  onThreeTransfersChange,
}) => {
  const filterData = [
    { text: 'Все', key: 'all', onChange: onAllChange },
    {
      text: 'Без пересадок',
      key: 'withoutTransfers',
      onChange: onWithoutTransfersChange,
    },
    { text: '1 пересадка', key: 'oneTransfer', onChange: onOneTransferChange },
    {
      text: '2 пересадки',
      key: 'twoTransfers',
      onChange: onTwoTransfersChange,
    },
    {
      text: '3 пересадки',
      key: 'threeTransfers',
      onChange: onThreeTransfersChange,
    },
  ];
  const transfersNodes = filterData.map(({ text, key, onChange }) => (
    <li key={key}>
      <label>
        <input
          onChange={onChange}
          checked={transfers[key]}
          type="checkbox"
          className={`${classes.input} ${classes['visuable-hidden']}`}
        />
        <span className={classes.checker}></span>
        {text}
      </label>
    </li>
  ));
  return (
    <div className={classes.sidebar}>
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
    onAllChange: () => dispatch({ type: 'all' }),
    onWithoutTransfersChange: () => dispatch({ type: 'withoutTransfers' }),
    onOneTransferChange: () => dispatch({ type: 'oneTransfer' }),
    onTwoTransfersChange: () => dispatch({ type: 'twoTransfers' }),
    onThreeTransfersChange: () => dispatch({ type: 'threeTransfers' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransplantFilter);
