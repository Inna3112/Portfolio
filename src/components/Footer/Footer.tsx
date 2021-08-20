import React from 'react';
import s from './Footer.module.scss';
import sContainer from '../../common/stiles/Container.module.scss'
import {ContactType} from '../../data/data';
import {Links} from './Links/Links';

type FooterPropsType = {
    contacts: Array<ContactType>
}
export const Footer: React.FC<FooterPropsType> = ({contacts}) => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Inna Fomichova</h2>
                <div className={s.socialIcons}>
                    <Links contacts={contacts}/>
                </div>
                <p className={s.footerRight}>2021 All rights reserved</p>
            </div>
        </div>
    );
}
