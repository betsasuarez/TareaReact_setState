import React, { useState } from 'react';

function createInitialTodos() {
    const initialTodos = [];

    for(let i = 0; i < 10; i++) {
        initialTodos.push({
            id: i,
            content: `Tarea automática ${i+1}`,
            completed: false
        });
    }

    return initialTodos;
}

function TodoList() {
    const [todos, setTodos] = useState(createInitialTodos);

    function handleAddTodo() {
        setTodos(prevTodos => [
            ...prevTodos,
            {
                id: prevTodos.length,
                content: "Mi nueva tarea",
                completed: false
            }
        ]);
    }

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
            <h1>Lista de Tareas</h1>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {todos.map(todo => (
                    <li key={todo.id} style={{ padding: '10px', marginBottom: '5px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '3px' }}>
                        {todo.content}
                    </li>
                ))}
            </ul>
            <button onClick={handleAddTodo} style={{ padding: '10px 20px', marginTop: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
                Añadir Tarea
            </button>
        </div>
    );
}

export default TodoList;
