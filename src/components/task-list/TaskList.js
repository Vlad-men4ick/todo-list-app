
import Task from '../task/Task';

import './TaskList.css'

// const TaskList = (props) => {
//     const filterFunc = function() {
//         if (props.filterStatus === 'Active') {
//             return props.activeTask.map((task) => {
//                 const {id, ...taskProps} = task;

//                 return (
//                     <li key={id}>
//                         <Task 
//                             {...taskProps}
//                             onDeleted={() => props.onDeleted(id)}
//                             onToggleDone={() => props.onToggleDone(id)}
//                         />
//                         </li>
//                 );

//             });
//         } else if (props.filterStatus === 'All') {
//             return props.todos.map((task) => {
//                 const {id, ...taskProps} = task;
//                 return (
//                     <li key={id}>
//                         <Task 
                            
//                             {...taskProps}
//                             onDeleted={() => props.onDeleted(id)}
//                             onToggleDone={() => props.onToggleDone(id)}
//                         />
//                     </li>
//                 );

//             });
//         } else {
//             return props.comletedTask.map((task) => {
//                 const {id, ...taskProps} = task;
//                 return (
//                     <li key={id}>
//                         <Task 
//                             {...taskProps}
//                             onDeleted={() => props.onDeleted(id)}
//                             onToggleDone={() => props.onToggleDone(id)}
//                         />
//                         </li>
//                 );

//             });
//         }
//     }
//         // const task = todos.map((item)=>{
//             //     const {id, ...itemProps} = item;
//             //     return(
//                 //         <Task 
//                 //         key={id}
//                 //         {...itemProps}
//                 //         onDeleted={()=>onDeleted(id)}
//                 //         onToggleDone={() => onToggleDone(id)}
//                 //         />
//                 //     )
//                 // })
//                 return(
//                     <ul className="todo-list">
//                         {filterFunc()}
//                     </ul>
//                 )
//             }

//     export default TaskList;


const TaskList = (props) => {
    
    const activeFilter = () => {
        const arr = props.todos.filter((task) => {
            return task.done === false
        })
        return arr
    }
    const activArr = activeFilter()

    const compliteFilter = () => {
        const arr = props.todos.filter((task) => {
            return task.done === true
        })
        return arr
    }
    const complitedArr = compliteFilter()

    const taskItem = (id, taskProps) => {
        return (
            <li key={id}>
                <Task 
                    {...taskProps}
                    onDeleted={() => props.onDeleted(id)}
                    onToggleDone={() => props.onToggleDone(id)}
                />
                </li>
        );
    }

    const filterFunc = () => {
        if (props.filterStatus === 'Active') {
            return activArr.map((task) => {
                const {id, ...taskProps} = task;
                    return taskItem(id, taskProps)
            });
        } else if (props.filterStatus === 'All') {
            return props.todos.map((task) => {
                const {id, ...taskProps} = task;
                    return  taskItem(id, taskProps)
            });
        } else {
            return complitedArr.map((task) => {
                const {id, ...taskProps} = task;
                    return taskItem(id, taskProps)
            });
        }
    }
        // const task = todos.map((item)=>{
            //     const {id, ...itemProps} = item;
            //     return(
                //         <Task 
                //         key={id}
                //         {...itemProps}
                //         onDeleted={()=>onDeleted(id)}
                //         onToggleDone={() => onToggleDone(id)}
                //         />
                //     )
                // })
                return(
                    <ul className="todo-list">
                        {filterFunc()}
                    </ul>
                )
            }

    export default TaskList;