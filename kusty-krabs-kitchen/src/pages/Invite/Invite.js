import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InviteCard from '../../Components/invite/invite';
import './Invite.css';





export default function Invite() {

    const [isVisible, setIsVisible] = useState(false);

    const handleCopyClick = () => {
        setIsVisible(!isVisible);
        setTimeout(() => {
            setIsVisible(false);
        }, 2000);
    };

    return (
        <>
            <div className={`hidden-div ${isVisible ? 'visible' : ''}`}>
                Invite copied.....
            </div>

            <img src="/InviteLogo.png" alt="Invite Image" className='krabbyCoin' />
            <h1 className='main__txt'>Invite Friends and Earn</h1>

            <InviteCard
                title1="Invite friend"
                subtitle1="&#128176; 2,500 for you & your friend"
                title2="Invite with Telegram Premium"
                subtitle2="&#128176; 50,000 for you & your friend"
            />

            <div className="invite-button-container">
                <div className="invite-button">
                    <span>Invite Friend</span>
                </div>
                <div className="copy-icon" onClick={handleCopyClick}>
                    <img src="/copy.png" alt="copyboard" className='copy__icon' />
                </div>
            </div>

            <div className='footer__container'>

                <div className='footer__contentII'>
                    <Link to='/home' className='no-underline'>
                        <img src={require('../imgs/Home.png')} alt="Home" className='footer__svg__size' />
                        <p className='footer__text'>Home</p>
                    </Link>
                </div>

                <div className='footer__contentII'>
                    <Link to='/earn' className='no-underline'>
                        <img src={require('../imgs/Earn.png')} alt="Earn" className='footer__svg__size' />
                        <p className='footer__text'>Earn</p>
                    </Link>
                </div>

                <div className='footer__content'>
                    <img src={require('../imgs/Invite.png')} alt="Invite" className='footer__svg__size' />
                    <p className='footer__text'>Invite</p>
                </div>

                <div className='footer__contentII'>
                    <Link to='/wallet' className='no-underline'>
                        <img src={require('../imgs/Wallet.png')} alt="Wallet" className='footer__svg__size' />
                        <p className='footer__text'>Wallet</p>
                    </Link>
                </div>
            </div>
        </>
    )
}
