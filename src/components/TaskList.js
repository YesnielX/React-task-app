import React from "react";
function TaskList(props) {

  const doneTask = () => {
    props.doneTask(props.task.description)
  }

  const deleteTask = () => {
    props.deleteTask(props.task.description)
  }

  return (
    <div className="p-1 task" key={props.task.description}> 
      <hr/>
      <p className={`task-descrip ${props.task.done && 'done'}`} onClick={doneTask}> {props.task.description} </p>
      <button className="btn btn-danger deleteBtn" onClick={deleteTask}><span role="img" aria-label="delete">Delete</span></button>
      <br/>
    </div>
  )
}

export default TaskList;
