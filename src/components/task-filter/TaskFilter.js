import './TaskFilter.css';

function TaskFilter({ allFilter, activeFilter, completedFilter, filterStatus }) {
  let allBtn = '';
  let activeBtn = '';
  let completedBtn = '';

  switch (filterStatus) {
    case 'All':
      allBtn = 'selected';
      break;
    case 'Active':
      activeBtn = 'selected';
      break;
    case 'Completed':
      completedBtn = 'selected';
      break;
    default:
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

TaskFilter.defaultProps = {
  allBtn: '',
  activeBtn: '',
  completedBtn: '',
  filterStatus: 'All',
  allFilter: () => {},
  activeFilter: () => {},
  completedFilter: () => {},
};
