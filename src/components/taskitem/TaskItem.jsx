import React from 'react';
import Modal from "../modal/Modal";
import useModal from '../../hooks/useModal';


// Paso el task > item y despues segun id del item que cliko se aplicara una u otra cosa
function TaskItem({task, onClickComplete, onClickRemove}) {
    
    
    function handleClickComplete() {
        onClickComplete(task.id)
    }

    function handleClickRemove() {
        onClickRemove(task.id)
    }

    const {isShowing, toggle} = useModal();
    

    return (

           <li>

                <p onClick={handleClickComplete} style={{textDecoration: task.done ? 'line-through' : 'none'}}>{task.text}</p>
                <button className="btn item-btn borrar-item" onClick ={handleClickRemove}> X </button> 
                
                <button className="btn item-btn edit-item" onClick={toggle}>✎</button>
                <Modal isShowing={isShowing} hide={toggle} />

           </li>

    )    
}





export default TaskItem