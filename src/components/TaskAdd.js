import React, { useState } from 'react';

function TaskAdd(props) {
  
  const [newTask, setNewTak] = useState("");

  const updateTask = e  => setNewTak(e.target.value);

  const addTask = (e) => {
    e.preventDefault();
    if(newTask.length > 0) {
      props.addTask(newTask);
      setNewTak("");
    }
    
  };

  return (
    <form onSubmit={addTask}>
      <h1>Task</h1>
        <input
          className="form-control task-descrip"
          name="task-description"
          type="text"
          autoComplete="off"
          placeholder="Task . . ."
          value={newTask}
          onChange={updateTask}
        />
        <button
          type="submit"
          name="button-add-task"
          className="btn btn-outline-success mt-1"
        >
          Add Task
        </button>
    </form>
  );
}

export default TaskAdd;
