import React from 'react'
import './List.css'
import { MdCheckCircle } from "react-icons/md";


const List = ({ iconColor, title, tasks, day, isCompleted }) => {


    return (

        <div className='list-items'>
            <div className='items-left'>
                {isCompleted ? <MdCheckCircle style={{ marginRight: "1.3rem", height: "27px", width: "27px", color: "rgb(91,97,122)" }} />

                    : <div className='round-icon' style={{ border: "2.5px solid " + iconColor }} />

                }
                <div className='left-title'>

                    <h5 style={isCompleted ? { textDecoration: "line-through", color: "lightgray" } : {}}>{title}</h5>
                    <span style={isCompleted ? { textDecoration: "line-through", color: "lightgray" } : {}}>{day}</span>

                    {/* <h5 style={isCompleted && { textDecoration: "line-through", color: "gray" }}>{title}</h5>
                    <span style={isCompleted && { textDecoration: "line-through", color: "gray" }}>{day}</span> */}
                </div>
            </div>
            <div className='items-right'>
                {tasks.map((task, i) => {
                    return (
                        <span style={isCompleted ? { backgroundColor: "hsl(158, 3%, 93%)", color: "gray" } : {}} key={i}>
                            {task}

                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default List