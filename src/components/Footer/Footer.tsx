import React from 'react';
import s from './Footer.module.css';
import sContainer from './../../common/stiles/Container.module.css'


export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Inna Fomichova</h2>
                <div className={s.contacts}>
                    <span>Facebook</span>
                    <span>Instagram</span>
                </div>
                <p>2021 All rights reserved</p>
            </div>
        </div>
    );
}