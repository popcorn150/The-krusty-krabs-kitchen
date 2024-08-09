import React from 'react';
import { Link } from 'react-router-dom';
import './Wallet.css';
import WalletCard from '../../Components/Wallet/wallet';

const walletImg = `<img src="/wallet_icon.png" alt="wallet icon" class="wallet__style"/>`

export default function Wallet() {
    return (
        <>
            <img src="/wallet.png" alt="Wallet Image" className='walletIcon' />
            <h1 className='main__txt'>Connect Wallet</h1>
            <h3 className='p__txt'>coming soon...</h3>

            <WalletCard
                svgIcon1={walletImg}
                title="Check back later for wallet connection..."
            />

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

                <div className='footer__contentII'>
                    <Link to='/invite' className='no-underline'>
                        <img src={require('../imgs/Invite.png')} alt="Invite" className='footer__svg__size' />
                        <p className='footer__text'>Invite</p>
                    </Link>

                </div>

                <div className='footer__content'>
                    <img src={require('../imgs/Wallet.png')} alt="Wallet" className='footer__svg__size' />
                    <p className='footer__text'>Wallet</p>
                </div>
            </div>
        </>
    )
}