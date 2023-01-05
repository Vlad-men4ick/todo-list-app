import { Component } from "react";
import Footer from "../footer/Footer";

import './App.css'

import Header from "../header/Header";
import NewTaskForm from "../new-task-form/NewTaskForm";
import TaskList from "../task-list/TaskList";

export default class App extends Component{

    genId = 100;

    state = {
        todoData : [], 
        filterStatus: 'All'
    }


    componentDidMount() {
        this.interval = setInterval(() => {
        this.setState(({ todoData }) => {
                let newArr = todoData.map(el => {
                    return el
                })
            return {
                todoData: newArr
            }
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }



    deletedTask = (id) =>{
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArr = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx+1)
            ];
            return{
                todoData: newArr
            }
        })
    }

    addItem = (text) => {
        const newItem = {
            label: text,
            done: false,
            date: new Date(),
            id: this.genId++,
        };
        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ]
            return {
                todoData: newArr
            };
        })
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newObj = [{...todoData[idx], done: !todoData[idx].done}];
            const newData = [...todoData.slice(0, idx), ...newObj, ...todoData.slice(idx + 1)];
            return {
                todoData: newData,
            };
        });
    }

    deleteCompleteTask = () => {
        this.setState(({todoData}) => {
            const doneTask = todoData.filter((el) => el.done === false )
            return {
                todoData: doneTask
            }
        })
    }

    getFilterStatusFromFooter = (status) => {
            this.setState(() => {
                return {
                    filterStatus: status
                }
            })
    };

    render(){
        return (
            <section className="todoapp">
            <Header>
                <NewTaskForm 
                    onItemAdded={this.addItem}/>
            </Header>
            <section className="main">
                <TaskList 
                    todos={this.state.todoData} 
                    onDeleted={this.deletedTask}
                    onToggleDone={this.onToggleDone}
                    filterStatus={this.state.filterStatus}
                    />
                <Footer 
                    todos={this.state}
                    filterStatus={this.state.filterStatus}
                    deleteCompleteTask={()=>this.deleteCompleteTask()}
                    getFilterStatusFromFooter={this.getFilterStatusFromFooter}
                />
            </section>
        </section>
        )
    }
}



