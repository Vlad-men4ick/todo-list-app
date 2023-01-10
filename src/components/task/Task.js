import { formatDistanceToNow } from 'date-fns';

import './Task.css';

function Task({ label, date, onDeleted, onToggleDone, done }) {
  let taskTime = formatDistanceToNow(date);

  let className = '';
  if (done === true) {
    className = 'completed';
  }
  let defaultChecked = '';
  if (done === true) {
    defaultChecked = true;
  }

  if (taskTime === 'less than a minute') {
    taskTime = 'created less 30 seconds ago';
  } else if (taskTime.includes('minute')) {
    taskTime = `created ${taskTime.split(' ')[0]} minutes ago`;
  } else if (taskTime.includes('hours')) {
    taskTime = `created ${taskTime.split(' ')[0]} hours ago`;
  }
  return (
    <div className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onToggleDone} defaultChecked={defaultChecked} />
        <label>
          <span className="description">{label}</span>
          <span className="created">{taskTime}</span>
        </label>
        <span className="icon icon-edit" />
        <button type="button" aria-label="deleted-completed" className="icon icon-destroy" onClick={onDeleted} />
      </div>
    </div>
  );
}

export default Task;
Task.defaultProps = {
  label: '',
  taskTime: new Date(),
  className: '',
  onToggleDone: () => {},
  defaultChecked: () => {},
  onDeleted: () => {},
};
