import TaskFilter from '../task-filter/TaskFilter';
import { Component } from 'react';
// import PropTypes from 'prop-types';

import './Footer.css';

export default class Footer extends Component {
  static defaultProps = {
    getFilterStatusFromFooter: () => {},
    deleteCompleteTask: () => {},
    filterStatus: 'All',
    doneCount: 0,
    todos: {},
  };

  // static propTypes = {
  //   filterStatus: PropTypes.string,
  //   doneCount: PropTypes.number,
  // };

  state = {
    filterStatus: 'All',
  };

  completedFilter = () => {
    const { getFilterStatusFromFooter } = this.props;
    this.setState({
      filterStatus: 'Completed',
    });
    getFilterStatusFromFooter('Completed');
  };

  allFilter = () => {
    const { getFilterStatusFromFooter } = this.props;
    this.setState({
      filterStatus: 'All',
    });
    getFilterStatusFromFooter('All');
  };

  activeFilter = () => {
    const { getFilterStatusFromFooter } = this.props;
    this.setState({
      filterStatus: 'Active',
    });
    getFilterStatusFromFooter('Active');
  };

  render() {
    const { deleteCompleteTask, todos } = this.props;
    const { filterStatus } = this.state;

    const doneCount = todos.todoData.reduce((acc, current) => (current.done === false ? acc + 1 : acc), 0);
    return (
      <footer className="footer">
        <span className="todo-count">{doneCount} items left</span>
        <TaskFilter
          todos={this.state}
          filterStatus={filterStatus}
          allFilter={this.allFilter}
          activeFilter={this.activeFilter}
          completedFilter={this.completedFilter}
        />
        <button type="button" className="clear-completed" onClick={deleteCompleteTask}>
          Clear completed
        </button>
      </footer>
    );
  }
}
