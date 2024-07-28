import React from 'react';
import './invite.css';


function InviteCard({ icon1, title1, subtitle1, icon2, title2, subtitle2 }) {
    return (
        <div className='invite__container'>
            <div className='invite__content'>
                <div className='invite__section'>
                    <div className='invite__icon' dangerouslySetInnerHTML={{ __html: icon1 }} />
                    <div className='invite__text'>
                        <h3 className='invite__title'>{title1}</h3>
                        <h4 className="invite__subtitle" dangerouslySetInnerHTML={{ __html: subtitle1 }} />
                    </div>
                </div>
                <hr className='invite__divider' />
                <div className='invite__section'>
                    <div className='invite__icon' dangerouslySetInnerHTML={{ __html: icon2 }} />
                    <div className='invite__text'>
                        <h3 className='invite__title'>{title2}</h3>
                        <h4 className="invite__subtitle" dangerouslySetInnerHTML={{ __html: subtitle2 }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InviteCard;