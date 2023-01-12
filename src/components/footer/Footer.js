import TaskFilter from '../task-filter/TaskFilter';
import { Component } from 'react';
import PropTypes from 'prop-types';

import './Footer.css';

export default class Footer extends Component {
  static defaultProps = {
    getFilterStatusFromFooter: () => {},
    deleteCompleteTask: () => {},
    todos: {},
  };

  static propTypes = {
    getFilterStatusFromFooter: PropTypes.func,
    deleteCompleteTask: PropTypes.func,
    todos: PropTypes.shape({
      filterStatus: PropTypes.string,
      todoData: PropTypes.arrayOf(PropTypes.shape()),
    }),
  };

  funcFilter = (name) => {
    const { getFilterStatusFromFooter } = this.props;
    getFilterStatusFromFooter(name);
  };

  render() {
    const { deleteCompleteTask, todos } = this.props;
    const doneCount = todos.todoData.reduce((acc, current) => (current.done === false ? acc + 1 : acc), 0);
    return (
      <footer className="footer">
        <span className="todo-count">{doneCount} items left</span>
        <TaskFilter filterStatus={todos.filterStatus} funcFilter={this.funcFilter} />
        <button type="button" className="clear-completed" onClick={deleteCompleteTask}>
          Clear completed
        </button>
      </footer>
    );
  }
}
