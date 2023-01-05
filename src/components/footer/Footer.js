import { Component } from "react";
import PropTypes from 'prop-types';

import TaskFilter from "../task-filter/TaskFilter";

import './Footer.css'

export default class Footer extends Component{

    static defaultProps = {
        filterStatus: 'All',
        doneCount: 0
    }

    static propTypes = {
        filterStatus: PropTypes.string,
        doneCount: PropTypes.number
    }

    state = {
        filterStatus: 1
    }

    completedFilter = () => {
        this.setState({
            filterStatus: 'Completed'
        })
        this.props.getFilterStatusFromFooter('Completed')
    }

    allFilter = () => {
        this.setState({
            filterStatus: 'All'
        })
        this.props.getFilterStatusFromFooter('All')
    }

    activeFilter = () => {
        this.setState({
            filterStatus: 'Active'
        })
        this.props.getFilterStatusFromFooter('Active')
    }

    render(){

        const {todoData} = this.props.todos
        const {deleteCompleteTask} = this.props
        const doneCount = todoData.reduce((acc ,current) => {
            if(current.done === false){
                acc++
            }
            return acc;
        }, 0)

        return(
            <footer className="footer">
                <span className="todo-count">{doneCount} items left</span>
                <TaskFilter
                    todos={this.state}
                    filterStatus={this.state.filterStatus}
                    allFilter = {this.allFilter}
                    activeFilter = {this.activeFilter}
                    completedFilter = {this.completedFilter}
                    />
                <button 
                    className="clear-completed" 
                    onClick={deleteCompleteTask}
                    >Clear completed</button>
            </footer>
        )
    }
}