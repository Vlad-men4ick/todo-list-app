/* eslint-disable react-hooks/exhaustive-deps */
import TaskList from '../task-list/TaskList';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import NewTaskForm from '../new-task-form/NewTaskForm';
import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [todoData, setTodoData] = useState([]);
  const [filterStatus, setFilterStatus] = useState('All');

  const interval = setInterval(() => {
    const newArr = todoData.map((el) => {
      if (el.time === 0 || el.done) {
        return el;
      }
      if (!el.pause) {
        el.time -= 1;
      }
      return el;
    });
    setTodoData(() => newArr);
  }, 1000);

  useEffect(() => {
    setTodoData(todoData);
  }, []);

  useEffect(() => () => clearInterval(interval));

  const deletedTask = (id) => {
    const idx = todoData.findIndex((el) => el.id === id);
    const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
    setTodoData(newArr);
  };

  const addItem = (text, time) => {
    const newItem = {
      label: text,
      done: false,
      date: new Date(),
      id: Date.now().toString(),
      time,
    };
    setTodoData((prevState) => [...prevState, newItem]);
  };

  const onToggleDone = (id) => {
    const idx = todoData.findIndex((el) => el.id === id);
    const newObj = [
      {
        ...todoData[idx],
        done: !todoData[idx].done,
      },
    ];
    const newData = [...todoData.slice(0, idx), ...newObj, ...todoData.slice(idx + 1)];
    setTodoData(newData);
  };

  const deleteCompleteTask = () => {
    const doneTask = todoData.filter((el) => el.done === false);
    setTodoData(doneTask);
  };

  const getFilterStatusFromFooter = (status) => {
    setFilterStatus(status);
  };

  const stopTimer = (id) => {
    const idx = todoData.findIndex((el) => el.id === id);
    const newObj = [{ ...todoData[idx], pause: true }];
    const newData = [...todoData.slice(0, idx), ...newObj, ...todoData.slice(idx + 1)];
    setTodoData(newData);
  };

  const startTimer = (id) => {
    const idx = todoData.findIndex((el) => el.id === id);
    const newObj = [{ ...todoData[idx], pause: false }];
    const newData = [...todoData.slice(0, idx), ...newObj, ...todoData.slice(idx + 1)];
    setTodoData(newData);
  };

  return (
    <section className="todoapp">
      <Header>
        <NewTaskForm onItemAdded={addItem} />
      </Header>
      <section className="main">
        <TaskList
          todos={todoData}
          onDeleted={deletedTask}
          onToggleDone={onToggleDone}
          filterStatus={filterStatus}
          stopTimer={stopTimer}
          startTimer={startTimer}
        />
        <Footer
          todos={{ todoData, filterStatus }}
          filterStatus={filterStatus}
          deleteCompleteTask={deleteCompleteTask}
          getFilterStatusFromFooter={getFilterStatusFromFooter}
        />
      </section>
    </section>
  );
}

export default App;
