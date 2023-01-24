import './NewTaskForm.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

function NewTaskForm(props) {
  const { onItemAdded } = props;
  const [label, setLabel] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const onLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const onLabelChangeMin = (e) => {
    setMin(e.target.value);
  };

  const onLabelChangeSec = (e) => {
    setSec(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onItemAdded(label, parseInt(min, 10) * 60 + parseInt(sec, 10));
    setLabel('');
    setMin('');
    setSec('');
  };

  return (
    <form className="todo-form" onSubmit={(e) => onSubmit(e)}>
      <input
        className="todo-new"
        placeholder="What needs to be done?"
        type="text"
        onChange={onLabelChange}
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
        onChange={onLabelChangeMin}
      />
      <input
        type="text"
        className="todo-input-sec"
        placeholder="Sec"
        maxLength={2}
        value={sec}
        required
        pattern="^[ 0-9]+$"
        onChange={onLabelChangeSec}
      />
      <button aria-label="submit" type="submit" />
    </form>
  );
}
export default NewTaskForm;

NewTaskForm.defaultProps = {
  onItemAdded: () => {},
};

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func,
};
