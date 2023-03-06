const PriorityFilter = () => {
  const priorityNames = ["Самый дешевый", "Самый быстрый", "Оптимальный"];
  const priotityNodes = priorityNames.map((name) => (
    <li key={name}>
      <button className="filter-item">{name}</button>
    </li>
  ));
  return <ul className="filter-list">{priotityNodes}</ul>;
};

export default PriorityFilter;
