import React from 'react';
import { Link } from 'react-router-dom';
import InviteCard from '../../Components/invite/invite';

export default function Invite() {
    return (
        <>
            <InviteCard 
                svgIcon1={''}
                title="Invite Bonus"
                subtitle="Earn up to 50,000 for you & your friend"
            />
            <div className='invite__style'>
                Invite Friend
                <div className='copy__clipboard'>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}