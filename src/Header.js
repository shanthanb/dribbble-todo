import React from 'react'
import './List.css'

const Header = () => {
    return (
        <div className='todo-header'>
            <h1>Todo</h1>
            <div className='todo-button'>
                <button className='btn'>Create Reminder</button>
            </div>
        </div>
    )
}

export default Header