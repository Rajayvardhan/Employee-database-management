import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <h1>Personal Task-list</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add New-Task</button>
            </div>
        </header>
    )
}

export default Header