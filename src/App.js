import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import TaskAdd from './components/TaskAdd'
import TaskList from './components/TaskList'
import './css/App.css';
import './css/Dark.css';

function App() {

  const [tasks, setTasks] = useState([])

  const addNewTask = taskDescription => {
    if(!tasks.find(task => task.description === taskDescription)){
      setTasks([...tasks, {description: taskDescription, done: false}])
    }
  };

  const doneTask = task => {
    setTasks(tasks.map(t => (
      t.description === task ? {...t, done: !t.done} : t
    )));
  }

  const deleteTask = tasktoDelete => {
    const newTasks = tasks.filter(task => task.description !== tasktoDelete)
    setTasks(newTasks);
  }

  const showTasks = (done) => {
    return tasks.filter(task => task.done === done)
    .map(task => (<TaskList key={task.description} task={task} doneTask={doneTask} deleteTask={deleteTask} />))
  };

  useEffect(() => {
    let tasksLocalStorage = localStorage.getItem('tasks');
    if(tasksLocalStorage != null){
      setTasks(JSON.parse(tasksLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>React Task App</h3>
      </header>
      <main className="main column">
        <div className="col-7 p-3">
          <TaskAdd addTask={addNewTask}/>
        </div>
        <hr/>
        <div className="container p-3">
          <h2>Tasks</h2>
          {showTasks(false)}
          <hr/>
          <h2>Completed Tasks</h2>
          {showTasks(true)}
        </div>
      </main>
    </div>
  );
}

export default App;
