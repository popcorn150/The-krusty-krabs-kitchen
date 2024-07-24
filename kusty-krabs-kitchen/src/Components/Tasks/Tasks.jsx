import React from 'react';
import './Tasks.css';

function TaskCard({ svgIcon1, title, subtitle, svgIcon2 }) {
    return (
        <>
            <div className='task__container'>
                <div className='task__contents'>
                    <div dangerouslySetInnerHTML={{ __html: svgIcon1 }} className='task__style' />
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                    <div dangerouslySetInnerHTML={{ __html: svgIcon2 }} />
                </div>
            </div>
        </>
    )
}

export default TaskCard;
