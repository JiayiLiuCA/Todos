import React from 'react';
import Proptypes from 'prop-types';

function TodoItem(props) {
    return (
        <div>
            <h2>{props.todo.title}</h2>
        </div>
    );
}

//PropTypes

TodoItem.propTypes = {
    todo: Proptypes.object.isRequired,
}


export default TodoItem;