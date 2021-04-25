const API_URL = 'http://localhost:3001';

// Aqui se envian las nuevas tareas al BE/DB
const createTask =  (data) => {
    return fetch(`${API_URL}/task`, {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ data }),
    }).then(res => res = res.json())
    .catch(error => console.error('Error:', error))
}

const getAllTasks =  () => {
    return fetch(`${API_URL}/task`, {
        method: 'GET',
        mode: 'cors',
    }).then(res => res = res.json());
}

const deleteTask = (taskId) => {
    return fetch(`${API_URL}/task/${taskId}`, {
        method: 'DELETE',
        mode: 'cors',
    }).then(res => res = res.json())
}

const patchTask = (taskId, data) => {
    return fetch(`${API_URL}/task/${taskId}`, {
        method: 'PATCH',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ data }),
    }).then(res => res = res.json())
    .catch(error => console.error('Error:', error))
}

// PATCH OR PUT TASK TITLE 

const clearCompleted = () => {
    return fetch(`${API_URL}/task/clearCompleted`, {
        method: 'POST',
        mode: 'cors',
    }).then(res => res = res.json())
    .catch(error => console.error('Error:', error))
}

const clearAll = () => {
    return fetch(`${API_URL}/task/clearAll`, {
        method: 'POST',
        mode: 'cors',
    }).then(res => res = res.json())
    .catch(error => console.error('Error:', error))
}



export default {
    createTask,
    getAllTasks,
    deleteTask,
    patchTask,
    clearCompleted,
    clearAll,
}