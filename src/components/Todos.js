import React from 'react';
import TodoItem from './TodoItem';
import Proptypes from 'prop-types';

function Todos(props) {
    const todos = props.todos.map((todo) =>
        <TodoItem 
            todo={todo} 
            key={todo.id} 
            markComplete={() => props.markComplete(todo.id)}
            deleteItem={() => props.deleteItem(todo.id)}
        />

    );
    return (
        <div>
            {todos}
        </div>
    );
}

//PropTypes
Todos.propTypes = {
    todos: Proptypes.array.isRequired,
}

export default Todos;