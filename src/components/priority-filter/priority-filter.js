import { connect } from 'react-redux';
import classes from './priority-filter.module.scss';

const PriorityFilter = ({ priorities }) => {
  const priorityNames = [
    { content: 'Самый дешевый', key: 'cheapest' },
    { content: 'Самый быстрый', key: 'quickest' },
    { content: 'Оптимальный', key: 'optimal' },
  ];

  const priotityNodes = priorityNames.map(({ content, key }) => {
    const btnClass = `${classes['filter-item']} ${priorities[key] && classes['filter-item--active']}`;
    return (
      <li key={key}>
        <button className={btnClass}>{content}</button>
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

export default connect(mapStateToProps)(PriorityFilter);
