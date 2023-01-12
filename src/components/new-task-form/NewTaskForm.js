import './NewTaskForm.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  static defaultProps = {
    onItemAdded: () => {},
  };

  static propTypes = {
    onItemAdded: PropTypes.func,
  };

  state = {
    label: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    const { onItemAdded } = this.props;
    const { label } = this.state;
    e.preventDefault();
    onItemAdded(label);
    this.setState({
      label: '',
    });
  };

  render() {
    const { label } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          type="text"
          onChange={this.onLabelChange}
          value={label}
          required
          pattern="^(?!\s+$)[\w\W]+"
        />
      </form>
    );
  }
}
