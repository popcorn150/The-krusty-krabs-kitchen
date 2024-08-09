import React from 'react';
import './Tasks.css';
import tasks from '../../pages/Earn/TaskData';

function TaskCard() {

    return (
        <div>
            {tasks.map(task => (
                <button key={task.id} className='task__container'>
                    <div className='task__contents'>
                        <img src={task.mainSrc} alt={task.alt} className='main__icon__style' />
                        <div className='task__text'>
                            <h3 className='title'>{task.mainLabel}</h3>
                            <div className='task__subtitle__container'>
                                <img src="/coin.png" alt="coin icon" className='task__icon' />
                                <p className='task__subtitle'>{task.subLabel}</p>
                            </div>
                        </div>
                        <div className='visit__icon'>
                            <img src="/Visit.png" alt="visit arrow" />
                        </div>
                    </div>
                </button>
            ))}
        </div>
    )
}

export default TaskCard;
