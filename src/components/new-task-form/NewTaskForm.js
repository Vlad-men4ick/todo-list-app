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
    min: '',
    sec: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onLabelChangeMin = (e) => {
    this.setState({
      min: e.target.value,
    });
  };

  onLabelChangeSec = (e) => {
    this.setState({
      sec: e.target.value,
    });
  };

  onLubmit = (e) => {
    const { onItemAdded } = this.props;
    const { label, min, sec } = this.state;
    e.preventDefault();
    onItemAdded(label, parseInt(min, 10) * 60 + parseInt(sec, 10));
    this.setState({
      label: '',
      min: '',
      sec: '',
    });
  };

  render() {
    const { label, min, sec } = this.state;
    return (
      <form className="todo-form" onSubmit={(e) => this.onLubmit(e)}>
        <input
          className="todo-new"
          placeholder="What needs to be done?"
          type="text"
          onChange={this.onLabelChange}
          value={label}
          required
          pattern="^(?!\s+$)[\w\W]+"
        />
        <input
          type="text"
          className="todo-input-min"
          placeholder="Min"
          maxLength={2}
          value={min}
          required
          pattern="^[ 0-9]+$"
          onChange={this.onLabelChangeMin}
        />
        <input
          type="text"
          className="todo-input-sec"
          placeholder="Sec"
          maxLength={2}
          value={sec}
          required
          pattern="^[ 0-9]+$"
          onChange={this.onLabelChangeSec}
        />
        <button aria-label="submit" type="submit" />
      </form>
    );
  }
}
