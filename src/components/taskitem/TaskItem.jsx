import React, {useState,useRef} from 'react';
//import Modal from "../modal/Modal";
//import useModal from '../../hooks/useModal';


// Paso el task > item y despues segun id del item que cliko se aplicara una u otra cosa
function TaskItem({task, onClickComplete, onClickRemove, onEditTask}) {

        
    const [isVisible, setIsVisible] = useState(false);
    const [editTitle, setEditTitle] = useState("")
    const [error,setError]=useState("")
    const refInput = useRef()
    
    // Gestionar click on item
    function handleClickComplete() {
        onClickComplete(task.id, task.done)
    }

    // Gestionar click on remove item
    function handleClickRemove() {
        onClickRemove(task.id)
    }

    // Para Modify form
    // On click edit item show/hide form
    function toggle() {
        setIsVisible( isVisible => !isVisible);
    }

    // Gestionar que pasa cuando click on save title
    function handleEditSubmit(e){
        e.preventDefault()

       if (!editTitle) {
            setError("You cannot modify title with empty space")
       }else {
            onEditTask({
                text: editTitle
            })
            setEditTitle("")
            setError("")
       }
    }

    function handleEditInput(e) {
        setEditTitle(e.target.value)
        if (error){
            setError("")
        }
    }

    

 
    //const {isShowing, toggle} = useModal();
    

    return (
        <>
           <li>

                <p onClick={handleClickComplete} style={{textDecoration: task.done ? 'line-through' : 'none'}}>{task.text}</p>
                <button className="btn item-btn borrar-item" onClick ={handleClickRemove}> X </button> 
                
                <button className="btn item-btn edit-item" onClick={toggle} >✎</button>
                {/*<Modal isShowing={isShowing} hide={toggle} />*/}

           </li>


           {isVisible && (
           
           <form className="modifyform" onSubmit={handleEditSubmit}>

                <div>
                    <input className="modify-input" ref={refInput} type="text" placeholder="Modify the title" value={editTitle} onChange={handleEditInput} />
                    <button className="btn item-btn save-item" type="submit" onClick={() => {refInput.current.focus()}} >🖫</button> {/* TO DO on error disable button */}
                </div>
                {error && <p className="errormsg">{error}</p>}
                
            </form> 

           )}

        </>

    )    
}





export default TaskItem