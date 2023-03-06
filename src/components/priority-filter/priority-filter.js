import classNames from "classnames";
import { connect } from "react-redux";
import "./priority-filter.scss";

const PriorityFilter = ({ priorities }) => {
  const priorityNames = [
    { content: "Самый дешевый", key: "cheapest" },
    { content: "Самый быстрый", key: "quickest" },
    { content: "Оптимальный", key: "optimal" },
  ];
  const priotityNodes = priorityNames.map(({ content, key }) => (
    <li key={key}>
      <button
        className={classNames("filter-item", {
          "filter-item--active": priorities[key],
        })}
      >
        {content}
      </button>
    </li>
  ));
  return <ul className="filter-list">{priotityNodes}</ul>;
};

const mapStateToProps = (state) => {
  return {
    priorities: state.priorities,
  };
};

export default connect(mapStateToProps)(PriorityFilter);
