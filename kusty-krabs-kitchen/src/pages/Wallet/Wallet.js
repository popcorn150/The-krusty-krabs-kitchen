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
                    <Link to='/home'>
                        <svg className='footer__svg__size' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                            <g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z" stroke="#85827d" stroke-width="1.5" /> <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16" stroke="#85827d" stroke-width="1.5" stroke-linecap="round" /> </g>
                        </svg>
                        <p className='footer__text'>Home</p>
                    </Link>
                </div>

                <div className='footer__contentII'>
                    <Link to='/earn'>
                        <svg className='footer__svg__size' fill="#85827d" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 962.5 962.5" stroke="#85827d">
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                            <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M333.25,603.5c-4.101,0-8.301,0.101-12.5,0.101c-87.2,0-169.5-10.2-231.8-28.7c-32.1-9.5-57.8-20.9-76.4-34 c-2.7-1.9-5.2-3.8-7.6-5.7v144.4c0,51.699,141.4,93.6,315.8,93.6c8.899,0,17.699-0.1,26.399-0.3 c-12.7-35.4-19.1-72.601-19.1-110.7C328.05,642.3,329.75,622.7,333.25,603.5z" /> <path d="M424.45,429.4c12.9-12.9,26.7-24.601,41.301-35c-44.601,6.6-94,10.1-145,10.1c-87.2,0-169.5-10.2-231.8-28.7 c-32.1-9.5-57.8-20.9-76.4-34c-2.7-1.9-5.2-3.8-7.6-5.7v143.8c0,4.2,1,8.3,2.8,12.399c20.5,45.9,152.8,81.2,313,81.2 c6.5,0,13-0.1,19.399-0.2c3.7-13.3,8.3-26.5,13.8-39.3c6.101-14.5,13.2-28.399,21.301-41.7 C388.85,469.601,405.35,448.5,424.45,429.4z" /> <path d="M320.75,217.2c-87.2,0-169.5-10.2-231.8-28.7c-32.1-9.5-57.8-20.9-76.4-34c-2.7-1.9-5.2-3.8-7.6-5.7v113.9v15v3.2 c0,4,0.9,8,2.5,11.8c19.6,46.1,152.4,81.8,313.3,81.8c160.899,0,293.7-35.7,313.299-81.8c1.6-3.9,2.5-7.8,2.5-11.8v-3.2v-15V148.8 c-2.4,2-4.9,3.9-7.6,5.7c-18.6,13-44.301,24.4-76.4,34C490.251,207,407.95,217.2,320.75,217.2z" /> <path d="M636.55,93.6c0-5.1-1.4-10.1-4.1-15c-2.801-5.2-7-10.2-12.5-15C577.751,26.6,459.75,0,320.75,0 c-139,0-257.101,26.6-299.2,63.6c-5.5,4.8-9.7,9.8-12.5,15c-2.7,4.9-4.1,9.9-4.1,15l0,0c0,51.7,141.4,93.6,315.8,93.6 C495.149,187.2,636.55,145.3,636.55,93.6L636.55,93.6z" /> <path d="M666.55,361.9c-3.1-0.1-6.199-0.2-9.4-0.2c-1.898,0-3.799,0-5.6,0.1c-5,0.1-10,0.3-15,0.6 c-94.299,6.4-176.7,56.3-227.2,129.899c-16.7,24.301-30,51.301-39,80.101c-1.6,5-3,10.1-4.3,15.2c-1.3,5-2.4,10.1-3.4,15.1 c-3.899,19.2-5.899,39.1-5.899,59.4c0,38.699,7.3,75.6,20.6,109.5C421.15,883.3,529.95,962.5,657.149,962.5 c165.9,0,300.4-134.5,300.4-300.399C957.649,499.4,828.149,366.9,666.55,361.9z M745.149,806.8 c-15.1,15.9-35.699,26.4-59.299,30.601v12c0,11-8.9,19.899-19.9,19.899h-10.801c-11,0-19.898-8.899-19.898-19.899v-12.5 c-13-2.5-25.5-6.7-36.701-12.4c-13.199-6.8-24.699-17.899-34.299-32.899c-6.4-10-11-21.601-13.801-34.601 c-1.1-4.899-0.199-9.8,2.1-13.8c2.801-5,7.801-8.7,13.9-9.8l10.699-1.9c2.201-0.399,4.4-0.399,6.4,0 c7.701,1.2,14.201,6.8,16.201,14.7c3,11.9,7.1,21.1,12.199,27.6c11.4,14.601,30.199,23.301,50.301,23.301l0,0 c3.398,0,6.799-0.301,10.199-0.801c14.4-2.199,27.301-9,36.199-19.199c9.5-10.801,14.301-24.4,14.301-40.4 c0-13.5-3.301-24.5-9.9-32.6c-12.1-14.801-32.799-21.2-51.5-25.4c-8.699-2-17-3.9-25.199-6.2c-13.6-3.9-26.701-8.7-39.801-16 c-13.5-7.5-24-18.1-31.299-31.4c-7.201-13.199-10.9-28.399-10.9-45.199c0-2,0.1-3.9,0.1-5.801c0.301-5.699,1-11.1,2-16.3 c1.301-6.2,3.1-12.1,5.5-17.7c5.301-12.399,13.4-23.399,24.1-32.8c7-6.1,15.4-11.2,24.9-15.1c7.4-3.101,15.5-5.4,24-7V469 c0-2.4,0.5-4.8,1.301-6.9c2.398-6.5,8.1-11.3,15-12.6c1.199-0.2,2.398-0.3,3.6-0.3h10.799c0.201,0,0.4,0,0.602,0 c10.699,0.3,19.299,9.1,19.299,19.8v16.5c17.9,3.5,33.801,10.5,45.801,20.4c12.699,10.5,21.9,23.8,27.6,39.8 c4.199,11.7-3.5,24.399-15.801,26.2l-10.5,1.6c-9.5,1.4-18.699-4.2-21.699-13.2c-2.5-7.399-5.9-13.5-10.1-18.2 c-9.5-10.6-24.4-16.699-40.9-16.699c-5,0-9.9,0.6-14.6,1.6c-3.1,0.7-6.1,1.6-9,2.7c-8.201,3.2-15.4,7.899-20.9,14 c-2.6,2.899-4.701,5.899-6.5,9.1c-4,7.2-6,15.2-6,24.1c0,12.601,3.5,23.301,10.5,31.801c6.199,7.399,14,12.6,22.799,16.399 c12,5.2,25.602,8,39,10.7c13.5,2.7,27.5,5.5,39.701,10.9c12.9,5.7,23.699,12.8,31.9,21c8.299,8.3,14.699,18.2,19.199,29.6 c4.4,11.3,6.701,23.7,6.701,36.8C772.851,763,763.55,787.4,745.149,806.8z" /> </g> </g> </g>

                        </svg>
                        <p className='footer__text'>Earn</p>
                    </Link>
                </div>

                <div className='footer__contentII'>
                    <Link to='/invite'>
                        <svg className='footer__svg__size' fill="#85827d" viewBox="0 -64 640 640" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                            <g id="SVGRepo_iconCarrier">

                                <path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z" />

                            </g>
                        </svg>
                        <p className='footer__text'>Invite</p>
                    </Link>
                </div>

                <div className='footer__content'>
                    <svg className='footer__svg__size' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0" />
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                        <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M2 8C2 5.79086 3.79086 4 6 4H18C20.2091 4 22 5.79086 22 8V9V15V16C22 18.2091 20.2091 20 18 20H6C3.79086 20 2 18.2091 2 16V8ZM18 6C19.1046 6 20 6.89543 20 8H18C15.7909 8 14 9.79086 14 12C14 14.2091 15.7909 16 18 16H20C20 17.1046 19.1046 18 18 18H6C4.89543 18 4 17.1046 4 16V8C4 6.89543 4.89543 6 6 6H18ZM18 10H20V14H18C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10ZM18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11C17.4477 11 17 11.4477 17 12C17 12.5523 17.4477 13 18 13Z" fill="#85827d" /> </g>
                    </svg>
                    <p className='footer__text'>Wallet</p>
                </div>

            </div>
        </>
    )
}