import React from 'react';
import panel from '../../images/panel.svg';
import yeseninLogo from '../../images/yeseninLogo.svg';

const openContacts = (text) => {
    return (
        <p className='contacts-inner-section' onClick={() => void 0}>
            <span>{text}</span>
        </p>
    );
}

const Title = () => {
    return (
        <div className="title">
            <div className="panel">
                <img src={panel} alt="panel" />
            </div>
            <div className="logo">
                <img src={yeseninLogo} alt="yeseninLogo" />
            </div>
            <div className='top-navigation'>
                <div className='contacts-section'>
                    {openContacts('Контакты')}
                </div>
                <div className='contacts-section'>
                    {openContacts('Карзина')}
                </div>
            </div>
        </div>
    )
}

export default Title;