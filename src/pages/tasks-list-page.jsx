import React, { useState,useEffect } from 'react'
import '../App.css'
import TaskForm from '../components/taskform/TaskForm'
import TaskList from '../components/tasklist/TaskList'
import TaskItem from '../components/taskitem/TaskItem'
import api from '../helpers/api';


function Tasklist() {              

  
  //SERVER Creamos un state para los tasks desde el servidor
  const [serverTasks, setServerTasks] = useState([]);
  console.log("All tasks:", serverTasks)

    

  //SERVER Se ejecuta solo la primera vez y nos trae todos los tasks
  useEffect(async() => {
    setServerTasks(await api.getAllTasks());
  },[])


  // Filtramos el tasks para devolvernos un array con los items que tienen done -> true HECHOS
  const tasksDone = serverTasks.filter( item => item.done)
  console.log("Tasks DONE:",tasksDone)

  // Filtramos el tasks para devolvernos un array con los items que tienen done -> falso NO HECHOS
  const tasksNotDone = serverTasks.filter(item => !item.done)
  console.log("Tasks TO DO:",tasksNotDone)

  // Obtenemos el numero de los tasks no hechos
  const tasksNotDoneNumber = tasksNotDone.length;
  console.log("Tasks to do Number:",tasksNotDoneNumber)

  {/*
  // Show message if no tasks left TO DO only the first time page loads NOT WORKING 
  useEffect(() => {
    if (tasksNotDoneNumber === 0){
      alert("Great!!!! You don't have any task to do. Why don't you add some???")
    }
  },[])
  */}

  // Show tasks left to document title
  useEffect (() => {
    const docTitle = document.querySelector("title");
    docTitle.innerText = `Task Manager / ${tasksNotDoneNumber} TASKS LEFT`
  },[serverTasks])

      

  // Crear Tarea -> viene el text=task de taskForm via handleSubmit
  //SERVER Enviamos las tareas creadas al servidor y recogemos las tareas via get
  async function handleSubmit(task) {
    await api.createTask(task);
    const tasks = await api.getAllTasks()
    setServerTasks(tasks);
  }

  
  // Editar texto de tarea que viene desde el itemList via props via PATCH
  async function editedTask({id, text}) {
    await api.patchTask( id, {text} );
    const tasks = await api.getAllTasks();
    setServerTasks(tasks);
  }
  
  {/*
  // Editar texto de tarea que viene desde el itemList via props via PUT
  async function editedTask({id, text, done}) {
    await api.putTask( id, {text}, {done} );
    const tasks = await api.getAllTasks()
    setServerTasks(tasks);
  }
  */}

  // Borrar tarea cuando clickas al botton
  async function removeTask(id){
    const response = await api.deleteTask(id);
    alert(response.message);
    const tasks = await api.getAllTasks();
    setServerTasks(tasks);
  }

  // Marca la tarea como completadas
  async function completeTask(id, done) {
    await api.patchTask(id, { done : !done});
    const tasks = await api.getAllTasks();
    setServerTasks(tasks);
  }

  // Clear todas las tareas completadas
  async function handleCompletedTasks() {
    await api.clearCompleted();
    const tasks = await api.getAllTasks();
    setServerTasks(tasks);
  }

  // Clear todas las tareas 
  async function handleClearAllTasks(){
    await api.clearAll();
    setServerTasks([])
  }

      
  return (
    <div className="wrapper">
      <div className="container">

        <h1 className="decoration1"> Task Manager </h1>
        <p className="pending">You have <span>{serverTasks.length}</span> tasks remaining</p>  

        <TaskForm onNewTasks={handleSubmit} onCompletedTasks={handleCompletedTasks} />

        <TaskList> 
          
          {serverTasks.map(task => 
            <TaskItem 
              key={task.id} 
              task={task} 
              onClickComplete={completeTask}
              onClickRemove={removeTask} 
              onEditTask={editedTask}
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

export default Tasklist
