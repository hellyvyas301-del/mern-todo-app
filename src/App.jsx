import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task.trim() === '') {
      return
    }

    const newTask = {
      text: task,
      completed: false,
    }

    setTasks([...tasks, newTask])
    setTask('')
  }

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter(
      (_, index) => index !== indexToDelete
    )

    setTasks(updatedTasks)
  }

  const completeTask = (indexToComplete) => {
    const updatedTasks = tasks.map((item, index) => {
      if (index === indexToComplete) {
        return {
          ...item,
          completed: !item.completed,
        }
      }

      return item
    })

    setTasks(updatedTasks)
  }

  return (
    <div className="app">
      <h1>My MERN To-Do App</h1>

      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="add-button" onClick={addTask}>
          Add Task
        </button>
      </div>

      <h2>My Tasks</h2>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <span className={`task-text ${item.completed ? 'completed' : ''}`}>
              {item.text}
            </span>

            <button
              className="complete-button"
              onClick={() => completeTask(index)}
            >
              {item.completed ? 'Undo' : 'Complete'}
            </button>

            <button
              className="delete-button"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App