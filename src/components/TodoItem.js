import React from 'react';
import Proptypes from 'prop-types';




function TodoItem(props) {
    const itemStyle = {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: props.todo.completed? 'line-through' : 'none'
    }
    return (
        <div style={itemStyle}>
            <p>
                <input type='checkbox' onChange={props.onChange} />
                {' '}
                {props.todo.title}
            </p>
        </div>
    );
}

//PropTypes

TodoItem.propTypes = {
    todo: Proptypes.object.isRequired,
}


export default TodoItem;