import React from 'react'

function Header() {
    return (
        <div>
            <header style={headerStyle}>
                <h1>TodoList</h1>
            </header>
            <a
                className='navbar-item'
                href='https://github.com/JiayiLiuCA/Todos'
                title='Todos'
            >
                <img
                src={'../../../public/github.png'}
                alt='image'
                width='28'
                height='28'
                />

            </a>
        </div>

    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}

export default Header