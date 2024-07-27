import React from 'react';



function InviteCard({ svgIcon1, title, subtitle, svgIcon2 }) {
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
            </div>
        </div>
    )
}

export default InviteCard;