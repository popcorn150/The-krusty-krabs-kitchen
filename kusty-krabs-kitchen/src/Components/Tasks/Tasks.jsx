import React from 'react';
import './Tasks.css';

function TaskCard({ svgIcon1, title, subtitle, svgIcon2 }) {
    return (
        <>
            <div className='task__container'>
                <div className='task__contents'>
                    <div dangerouslySetInnerHTML={{ __html: svgIcon1 }} className='task__style' />
                    <div>
                    <h3 dangerouslySetInnerHTML={{__html: title}}/><br />
                    <h5 dangerouslySetInnerHTML={{__html: subtitle}} />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: svgIcon2 }} />
                </div>
            </div>
        </>
    )
}

export default TaskCard;
