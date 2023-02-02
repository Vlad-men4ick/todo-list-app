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
    setTodoData((todoItems) => {
      const newArr = todoItems.map((el) => {
        if (el.time === 0 || el.done) {
          return el;
        }
        if (!el.pause) {
          el.time -= 1;
        }
        return el;
      });
      return newArr;
    });
  }, 1000);

  useEffect(() => {
    setTodoData(todoData);
  }, []);

  useEffect(() => () => clearInterval(interval));

  const deletedTask = (id) => {
    setTodoData((todoItems) => {
      const idx = todoItems.findIndex((el) => el.id === id);
      const newArr = [...todoItems.slice(0, idx), ...todoItems.slice(idx + 1)];
      return newArr;
    });
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
    setTodoData((todoItems) => {
      const idx = todoItems.findIndex((el) => el.id === id);
      const newObj = [
        {
          ...todoItems[idx],
          done: !todoItems[idx].done,
        },
      ];
      const newData = [...todoItems.slice(0, idx), ...newObj, ...todoItems.slice(idx + 1)];
      return newData;
    });
  };

  const deleteCompleteTask = () => {
    setTodoData((todoItems) => {
      const doneTask = todoItems.filter((el) => el.done === false);
      return doneTask;
    });
  };

  const getFilterStatusFromFooter = (status) => {
    setFilterStatus(() => status);
  };

  const stopTimer = (id) => {
    setTodoData((todoItems) => {
      const idx = todoItems.findIndex((el) => el.id === id);
      const newObj = [{ ...todoItems[idx], pause: true }];
      const newData = [...todoItems.slice(0, idx), ...newObj, ...todoItems.slice(idx + 1)];
      return newData;
    });
  };

  const startTimer = (id) => {
    setTodoData((todoItems) => {
      const idx = todoItems.findIndex((el) => el.id === id);
      const newObj = [{ ...todoItems[idx], pause: false }];
      const newData = [...todoItems.slice(0, idx), ...newObj, ...todoItems.slice(idx + 1)];
      return newData;
    });
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
