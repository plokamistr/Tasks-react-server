import React, {useState,useRef} from 'react';
import idGenerator from '../../helpers/idGen';
import useLocalStorage from '../../hooks/useLocalStorage'

function TaskForm({onNewTasks, onCompletedTasks}){

    // Aqui tenemos el valor del input que cambia por culpa de setText la cual recibe el valor del input 
    const [title, setTitle] = useLocalStorage("Task Title before save", "")
    const [error,setError]=useState("")
    const refInput = useRef()

    
    function handleInput(e) {
        setTitle(e.target.value)
        if (error && inputField.value){
            setError("")
        }
    }
           
    function handleSubmit(e){
        e.preventDefault()

       if (!title) {
            setError("You cannot add empty task")
       }else {
            // Paso a App.jsx la function setTasks que traigo via props el valor de tasks que es el valor del input 
            onNewTasks({
                id: idGenerator(),
                text: title,
                done: false
            }) 
            setTitle("")
            setError("")
       }
    }

    function handleCompletedTasks() {
        onCompletedTasks()
    }

    return(

        <form className="tasksform" onSubmit={handleSubmit}>

            <input ref={refInput} type="text" placeholder="Write your task" value={title} onChange={handleInput}/>
            {error && <p className="errormsg">{error}</p>}
            
            <div className="buttons-wrapper">
                <button className="btn btn-addtask" type="submit" onClick={() => {refInput.current.focus()}}>Add task to list</button> {/* TO DO on error disable button */}
                {/* Pasar las tasks via props desde app y quitarlas desde task form?????? */}
                <button type="button" className="btn btn-removecompletedtask" onClick={handleCompletedTasks} >Remove Completed tasks</button> 
            </div>
            
 
        </form>


    )
}

export default TaskForm



