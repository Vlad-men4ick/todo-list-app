import './TaskFilter.css';

function TaskFilter({ allFilter, activeFilter, completedFilter, filterStatus }) {
  let allBtn = '';
  let activeBtn = '';
  let completedBtn = '';
  if (filterStatus === 'All') {
    allBtn = 'selected';
  } else if (filterStatus === 'Active') {
    activeBtn = 'selected';
  } else if (filterStatus === 'Completed') {
    completedBtn = 'selected';
  }
  return (
    <ul className="filters">
      <li className={allBtn}>
        <button type="button" onClick={allFilter}>
          All
        </button>
      </li>
      <li className={activeBtn}>
        <button type="button" onClick={activeFilter}>
          Active
        </button>
      </li>
      <li className={completedBtn}>
        <button type="button" onClick={completedFilter}>
          Completed
        </button>
      </li>
    </ul>
  );
}

export default TaskFilter;
