import './NewTaskForm.css';
import { Component } from 'react';

export default class NewTaskForm extends Component {
  static defaultProps = {
    label: '',
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
    // if (!Number.isNaN(+label)) {
    //   // alert('Describe the task in more detail'); // вопрос по валидации так как pattern срабатывает после отправки формы
    //   return;
    // }
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
          // pattern="/[^a-zа-яё0-9]/gi, ''"
        />
      </form>
    );
  }
}
