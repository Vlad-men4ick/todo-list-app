import { formatDistanceToNow } from 'date-fns';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Task.css';

function Task({ label, date, onDeleted, onToggleDone, done, startTimer, stopTimer, time }) {
  let taskTime = formatDistanceToNow(date);
  const className = classNames('', { completed: done });
  const defaultChecked = classNames('', { defaultChecked: done });
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
        <label className="view-container">
          <span className="description">{label}</span>
          <span className="icon-time">{`${Math.floor(time / 60)
            .toString()
            .padStart(2, '0')}:${Math.floor(time % 60)
            .toString()
            .padStart(2, '0')}`}</span>
          <span className="created">{taskTime}</span>
        </label>
        <button type="button" aria-label="start-timer" className="icon icon-play" onClick={startTimer} />
        <button type="button" aria-label="stop-timer" className="icon-pause" onClick={stopTimer} />
        <span className="icon icon-edit" />
        <button type="button" aria-label="deleted-completed" className="icon icon-destroy" onClick={onDeleted} />
      </div>
    </div>
  );
}

export default Task;
Task.defaultProps = {
  label: '',
  date: new Date(),
  done: false,
  onToggleDone: () => {},
  defaultChecked: () => {},
  onDeleted: () => {},
  startTimer: () => {},
  stopTimer: () => {},
};

Task.propType = {
  label: PropTypes.string,
  date: PropTypes.shape(),
  done: PropTypes.bool,
  onToggleDone: PropTypes.func,
  defaultChecked: PropTypes.func,
  onDeleted: PropTypes.func,
  startTimer: PropTypes.func,
  stopTimer: PropTypes.func,
};
