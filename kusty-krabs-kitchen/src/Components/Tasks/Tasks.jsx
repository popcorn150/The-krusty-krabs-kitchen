import React from 'react';
import './Tasks.css';

function TaskCard({ svgIcon1, title, subtitle, svgIcon2 }) {
    return (
        <div className='task__container'>
            <div className='task__contents'>
                <div dangerouslySetInnerHTML={{ __html: svgIcon1 }} />
                <div className='task__text'>
                    <h3 className='task__title'>{title}</h3>
                    <div className='task__subtitle-container'>
                        <img src="/coin.png" alt="coin icon" className='task__icon' />
                        <h4 className='task__subtitle'>{subtitle}</h4>
                    </div>
                </div>
                <svg width="80px" height="80px" fill="none" stroke="#1c1f24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m10 7 5 5-5 5" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
                </svg>
            </div>
        </div>
    )
}

export default TaskCard;
