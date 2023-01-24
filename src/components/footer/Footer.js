import TaskFilter from '../task-filter/TaskFilter';
import PropTypes from 'prop-types';

import './Footer.css';

function Footer(props) {
  const { getFilterStatusFromFooter, deleteCompleteTask, todos } = props;
  const funcFilter = (name) => {
    getFilterStatusFromFooter(name);
  };

  const doneCount = todos.todoData.reduce((acc, current) => (current.done === false ? acc + 1 : acc), 0);
  return (
    <footer className="footer">
      <span className="todo-count">{doneCount} items left</span>
      <TaskFilter filterStatus={todos.filterStatus} funcFilter={funcFilter} />
      <button type="button" className="clear-completed" onClick={deleteCompleteTask}>
        Clear completed
      </button>
    </footer>
  );
}
export default Footer;

Footer.defaultProps = {
  getFilterStatusFromFooter: () => {},
  deleteCompleteTask: () => {},
  todos: {},
};

Footer.propTypes = {
  getFilterStatusFromFooter: PropTypes.func,
  deleteCompleteTask: PropTypes.func,
  todos: PropTypes.shape({
    filterStatus: PropTypes.string,
    todoData: PropTypes.arrayOf(PropTypes.shape()),
  }),
};
