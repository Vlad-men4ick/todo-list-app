import Task from '../task/Task';
import PropTypes from 'prop-types';

import './TaskList.css';

function TaskList({ todos, onDeleted, onToggleDone, filterStatus }) {
  const taskItem = (id, taskProps) => (
    <li key={id}>
      <Task {...taskProps} onDeleted={() => onDeleted(id)} onToggleDone={() => onToggleDone(id)} />
    </li>
  );

  const filterFunc = () => {
    if (filterStatus === 'Active') {
      return todos
        .filter((task) => task.done === false)
        .map((task) => {
          const { id, ...taskProps } = task;
          return taskItem(id, taskProps);
        });
    }
    if (filterStatus === 'Completed') {
      return todos
        .filter((task) => task.done === true)
        .map((task) => {
          const { id, ...taskProps } = task;
          return taskItem(id, taskProps);
        });
    }
    return todos.map((task) => {
      const { id, ...taskProps } = task;
      return taskItem(id, taskProps);
    });
  };
  return <ul className="todo-list">{filterFunc()}</ul>;
}

export default TaskList;
TaskList.defaultProps = {
  onDeleted: () => {},
  onToggleDone: () => {},
  todos: [],
  filterStatus: 'All',
};

TaskList.propTypes = {
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  todos: PropTypes.arrayOf(PropTypes.objectOf),
  filterStatus: PropTypes.string,
};
