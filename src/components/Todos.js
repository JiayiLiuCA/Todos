import React from 'react';

function Todos(props) {
    const todos = props.todos.map((todoItem) =>
        <div key={todoItem.id}>
            <h3>{todoItem.title}</h3>
        </div>
    );
    return (
        <div>
            {todos}
        </div>
    );
}


export default Todos;