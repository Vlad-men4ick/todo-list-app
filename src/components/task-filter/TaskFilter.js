import PropTypes from 'prop-types';

import './TaskFilter.css';

function TaskFilter({ filterStatus, funcFilter }) {
  const filterButtons = [
    { name: 'All', label: 'All' },
    { name: 'Active', label: 'Active' },
    { name: 'Completed', label: 'Completed' },
  ];
  const buttons = filterButtons.map(({ name, label }) => {
    const isActive = name === filterStatus;
    const classNames = isActive ? 'selected' : '';
    return (
      <li className={classNames} key={name}>
        <button type="button" onClick={() => funcFilter(name)}>
          {label}
        </button>
      </li>
    );
  });

  return <ul className="filters">{buttons}</ul>;
}

export default TaskFilter;

TaskFilter.defaultProps = {
  filterStatus: 'All',
  funcFilter: () => {},
};

TaskFilter.propTypes = {
  filterStatus: PropTypes.string,
  funcFilter: PropTypes.func,
};
