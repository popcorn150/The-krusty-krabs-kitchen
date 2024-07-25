import React from 'react';
import './Tasks.css';

function TaskCard({ key, svgIcon1, title, subtitle, svgIcon2, coinIcon }) {
    return (
        <>
            <div className='task__container'>
                <div className='task__contents'>
                    <div dangerouslySetInnerHTML={{ __html: svgIcon1 }} className='task__style' />
                    <div>
                    <h3 dangerouslySetInnerHTML={{__html: title}}/>
                    <div dangerouslySetInnerHTML={{__html: coinIcon}}/>
                    <h5 dangerouslySetInnerHTML={{__html: subtitle}} />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: svgIcon2 }} />
                </div>
            </div>
        </>
    )
}

export default TaskCard;
