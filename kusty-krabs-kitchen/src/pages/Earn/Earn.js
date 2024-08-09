import React from 'react';
import { Link } from 'react-router-dom';
import './Earn.css';
import TaskCard from '../../Components/Tasks/Tasks';


export default function Earn() {

    return (
        <>
            <img src="/krabbyCoin.png" alt="Earn Image" className='krabbyCoin' />
            <h1 className='main__txt'>Earn more krabby coins</h1>
            <h4 className='sub__txt'>Complete tasks below to earn more coin</h4>
           
            <TaskCard />

            <div className='footer__container'>

                <div className='footer__contentII'>
                    <Link to='/home' className='no-underline'>
                        <img src={require('../imgs/Home.png')} alt="Home" className='footer__svg__size' />
                        <p className='footer__text'>Home</p>
                    </Link>

                </div>

                <div className='footer__content'>
                    <img src={require('../imgs/Earn.png')} alt="Earn" className='footer__svg__size' />
                    <p className='footer__text'>Earn</p>
                </div>

                <div className='footer__contentII'>
                    <Link to='/invite' className='no-underline'>
                        <img src={require('../imgs/Invite.png')} alt="Invite" className='footer__svg__size' />
                        <p className='footer__text'>Invite</p>
                    </Link>
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
