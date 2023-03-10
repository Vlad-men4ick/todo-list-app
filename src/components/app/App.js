import TaskList from '../task-list/TaskList';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import NewTaskForm from '../new-task-form/NewTaskForm';
import { Component } from 'react';

import './App.css';

export default class App extends Component {
  genId = 100;

  state = {
    todoData: [],
    filterStatus: 'All',
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(({ todoData }) => {
        const newArr = todoData.map((el) => {
          if (el.time === 0 || el.done) {
            return el;
          }
          if (!el.pause) {
            el.time -= 1;
          }
          return el;
        });
        return {
          todoData: newArr,
        };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  deletedTask = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArr,
      };
    });
  };

  addItem = (text, time) => {
    const newItem = {
      label: text,
      done: false,
      date: new Date(),
      id: this.genId++,
      time,
    };
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newObj = [
        {
          ...todoData[idx],
          done: !todoData[idx].done,
        },
      ];
      const newData = [...todoData.slice(0, idx), ...newObj, ...todoData.slice(idx + 1)];
      return {
        todoData: newData,
      };
    });
  };

  deleteCompleteTask = () => {
    this.setState(({ todoData }) => {
      const doneTask = todoData.filter((el) => el.done === false);
      return {
        todoData: doneTask,
      };
    });
  };

  getFilterStatusFromFooter = (status) => {
    this.setState(() => ({
      filterStatus: status,
    }));
  };

  stopTimer = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newObj = [{ ...todoData[idx], pause: true }];
      const newData = [...todoData.slice(0, idx), ...newObj, ...todoData.slice(idx + 1)];
      return {
        todoData: newData,
      };
    });
  };

  startTimer = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newObj = [{ ...todoData[idx], pause: false }];
      const newData = [...todoData.slice(0, idx), ...newObj, ...todoData.slice(idx + 1)];
      return {
        todoData: newData,
      };
    });
  };

  render() {
    const { todoData, filterStatus } = this.state;
    return (
      <section className="todoapp">
        <Header>
          <NewTaskForm onItemAdded={this.addItem} />
        </Header>
        <section className="main">
          <TaskList
            todos={todoData}
            onDeleted={this.deletedTask}
            onToggleDone={this.onToggleDone}
            filterStatus={filterStatus}
            stopTimer={this.stopTimer}
            startTimer={this.startTimer}
          />
          <Footer
            todos={this.state}
            filterStatus={filterStatus}
            deleteCompleteTask={() => this.deleteCompleteTask()}
            getFilterStatusFromFooter={this.getFilterStatusFromFooter}
          />
        </section>
      </section>
    );
  }
}
