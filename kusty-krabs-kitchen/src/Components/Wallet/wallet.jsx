import React from 'react';
import './wallet.css';

function WalletCard({ svgIcon1, title, subtitle, svgIcon2 }) {
    return (
        <div className='task__container'>
            <div className='task__contents'>
                <div dangerouslySetInnerHTML={{ __html: svgIcon1 }} />
                <div className='task__text'>
                    <h3 className='task__title'>{title}</h3>
                </div>
            </div>
        </div>
    )
}

export default WalletCard;
