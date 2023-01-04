
import { Component } from "react";
import './TaskFilter.css'

export default class TaskFilter extends Component{
        // const TaskFilter = ({allFilter, activeFilter, completedFilter, filterStatus}) => {

        // static defaultProps = {
        //     allBtn: 'selected'
        // }

            // let allBtn = ''
            // let activeBtn = ''
            // let completedBtn = ''
            // if (filterStatus === 'All') {
            //     allBtn += 'selected'
            // } else if (filterStatus === 'Active') {
            //     activeBtn += 'selected'
            // } else if (filterStatus === 'Completed') {
            //     completedBtn += 'selected'
            // }
        render(){
            const {allFilter, activeFilter, completedFilter, filterStatus} = this.props
            let allBtn = ''
            let activeBtn = ''
            let completedBtn = ''
            if (filterStatus === 'All') {
                allBtn = 'selected'
            } else if (filterStatus === 'Active') {
                activeBtn = 'selected'
            } else if (filterStatus === 'Completed') {
                completedBtn = 'selected'
            }
            return(
                <ul className="filters">
                    <li className={allBtn} >
                        <button 
                            onClick={allFilter}
                        >All</button>
                    </li>
                    <li className={activeBtn}>
                        <button 
                            onClick={activeFilter}
                        >Active</button>
                    </li>
                    <li className={completedBtn}>
                        <button 
                            onClick={completedFilter}
                        >Completed</button>
                    </li>
                </ul>
            );
    }
}

    // export default TaskFilter