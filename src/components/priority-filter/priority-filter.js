import { connect } from 'react-redux';
import classes from './priority-filter.module.scss';

const PriorityFilter = ({ priorities, onCheapestClick, onQuickestClick, onOptimalClick }) => {
  const priorityNames = [
    { content: 'Самый дешевый', key: 'cheapest', onClick: onCheapestClick },
    { content: 'Самый быстрый', key: 'quickest', onClick: onQuickestClick },
    { content: 'Оптимальный', key: 'optimal', onClick: onOptimalClick },
  ];

  const priotityNodes = priorityNames.map(({ content, key, onClick }) => {
    const btnClass = `${classes['filter-item']} ${priorities[key] && classes['filter-item--active']}`;
    return (
      <li key={key}>
        <button onClick={onClick} className={btnClass}>
          {content}
        </button>
      </li>
    );
  });
  return <ul className={classes['filter-list']}>{priotityNodes}</ul>;
};

const mapStateToProps = (state) => {
  return {
    priorities: state.priorities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCheapestClick: () => dispatch({ type: 'CHEAPEST' }),
    onQuickestClick: () => dispatch({ type: 'QUICKEST' }),
    onOptimalClick: () => dispatch({ type: 'OPTIMAL' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PriorityFilter);
