import React from 'react'
import './List.css'
const List = ({ iconColor, title, tasks, day }) => {


    return (

        <div className='list-items'>
            <div className='items-left'>
                <div className='round-icon' style={{ border: "2.5px solid " + iconColor }} />
                <div className='left-title'>
                    <h5>{title}</h5>
                    <span>{day}</span>
                </div>
            </div>
            <div className='items-right'>
                {tasks.map((task) => {

                    return (
                        <span>
                            {task}
                        </span>
                    )

                })}
            </div>
        </div>
    )
}

export default List