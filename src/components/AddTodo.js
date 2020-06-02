import React, { Component } from 'react'


class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        }
    }

    onChange = (e) => this.setState({
        title: e.target.value
    })

    onSubmit = (e) => {
        
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: '' //set title to default after submit
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input
                    type='text'
                    name='title'
                    style={{ flex: '10', padding: '5px' }}
                    placeholder='Add Todo ...'
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type='submit'
                    value='Submit'
                    className='btn'
                    style={{ flex: '1' }}
                />
            </form>
        )
    }
}

export default AddTodo