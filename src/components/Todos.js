import React from 'react';
import TodoItem from './TodoItem';
import Proptypes from 'prop-types';

function Todos(props) {
    const todos = props.todos.map((todo) =>
        <TodoItem todo={todo} />

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