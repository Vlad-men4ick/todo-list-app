import Task from '../task/Task';

import './TaskList.css';

function TaskList({ todos, onDeleted, onToggleDone, filterStatus }) {
  const activeFilter = () => {
    const arr = todos.filter((task) => task.done === false);
    return arr;
  };
  const activArr = activeFilter();

  const compliteFilter = () => {
    const arr = todos.filter((task) => task.done === true);
    return arr;
  };
  const complitedArr = compliteFilter();

  const taskItem = (id, taskProps) => (
    <li key={id}>
      <Task {...taskProps} onDeleted={() => onDeleted(id)} onToggleDone={() => onToggleDone(id)} />
    </li>
  );

  const filterFunc = () => {
    if (filterStatus === 'Active') {
      return activArr.map((task) => {
        const { id, ...taskProps } = task;
        return taskItem(id, taskProps);
      });
    }
    if (filterStatus === 'All') {
      return todos.map((task) => {
        const { id, ...taskProps } = task;
        return taskItem(id, taskProps);
      });
    }
    return complitedArr.map((task) => {
      const { id, ...taskProps } = task;
      return taskItem(id, taskProps);
    });
  };
  return <ul className="todo-list">{filterFunc()}</ul>;
}

export default TaskList;
