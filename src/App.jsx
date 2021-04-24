import React, { useState,useEffect } from 'react'
import './App.css'
import TaskForm from './components/taskform/TaskForm'
import TaskList from './components/tasklist/TaskList'
import TaskItem from './components/taskitem/TaskItem'
import useLocalStorage from './hooks/useLocalStorage'


function App() {              

  const [tasks, setTasks] = useLocalStorage("Tasks Added", [])
  console.log("All tasks:", tasks)

  // Filtramos el tasks para devolvernos un array con los items que tienen done -> true HECHOS
  const tasksDone = tasks.filter( item => item.done)
  console.log("Tasks DONE:",tasksDone)

  // Filtramos el tasks para devolvernos un array con los items que tienen done -> falso NO HECHOS
  const tasksNotDone = tasks.filter(item => !item.done)
  console.log("Tasks TO DO:",tasksNotDone)

  // Obtenemos el numero de los tasks no hechos
  const tasksNotDoneNumber = tasksNotDone.length;
  console.log("Tasks to do Number:",tasksNotDoneNumber)
  
   

  // Show message if no tasks left TO DO only the first time page loads NOT WORKING 
  useEffect(() => {
      if (tasksNotDoneNumber === 0){
        alert("Great!!!! You don't have any task to do. Why don't you add some???")
      }
   
  },[])


    // Show tasks left to document title
  useEffect (() => {
    const docTitle = document.querySelector("title");
    docTitle.innerText = `Task Manager / ${tasksNotDoneNumber} TASKS LEFT`
  },[tasks])

      
  // Aqui viene el text=task de taskForm via handleSubmit la cual lleva el text de onNewTask que viene via props de TaskForm          
  function handleSubmit(task) {
    const newTasks = [...tasks,task]
    setTasks(newTasks)
  }

  // Marca las tareas como completadas
  function completeTask(id) {
    const newTasks = tasks.map( item => { 
        if (item.id === id){
            return{
                ...item,
                done:!item.done
            } 
        }
        return item
    } )
    setTasks(newTasks)
  }


  // Borrar las tareas cuando clickas al botton
  function removeTask(id){
    const newTasks = tasks.filter( item => item.id !== id)
    setTasks(newTasks)
  }


  // Clear todas las tareas completadas
  function handleCompletedTasks() {
    const completedTasks = tasks.filter(item => item.done !== true)
    setTasks(completedTasks)
  }

  // Clear todas las tareas 
  function handleClearAllTasks(){
    setTasks([])
  }



  

    
  return (
    <div className="wrapper">
      <div className="container">

        <h1 className="decoration1"> Task Manager </h1>
        <p className="pending">You have <span>{tasks.length}</span> tasks remaining</p>  

        <TaskForm onNewTasks={handleSubmit} onCompletedTasks={handleCompletedTasks}/>

        <TaskList> 

          {tasks.map(task => 
            <TaskItem 
              key={task.id} 
              task={task} 
              onClickComplete={completeTask}
              onClickRemove={removeTask} 
            />
            
          )}
          
        </TaskList>
        
        <div className="buttons-clear">
          {/*<button onClick={handleCompletedTasks}>Clear DONE tasks</button> */}
          <button className="btn btn-removeall" onClick={handleClearAllTasks}>Clear ALL tasks</button>    
        </div>
      


      </div>
    </div>
  

  )
}

export default App
