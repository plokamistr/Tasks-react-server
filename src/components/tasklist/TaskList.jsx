import React from 'react';



function TaskList({children}) {
    
    return (

        <div className="tasklist">
            <ul>
                {children} 
            </ul>
        </div>
    )    
}



export default TaskList