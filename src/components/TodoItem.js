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
                <input type='checkbox' onChange={props.markComplete} />
                {' '}
                {props.todo.title}
                <button style={btnStyle} onClick={props.deleteItem} > x </button>
            </p>
        </div>
    );
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
}

//PropTypes

TodoItem.propTypes = {
    todo: Proptypes.object.isRequired,
}


export default TodoItem;