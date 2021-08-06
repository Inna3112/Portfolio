import React from 'react';
import s from './Footer.module.css';
import sContainer from './../../common/stiles/Container.module.css'
import {ContactType} from "../../data/data";
import {DescribeBlock} from "../../common/components/DescribeBlock/DescribeBlock";

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

type ContactPropsType = {
    image: string
    imgAlt: string
    link: string
}
export const Contact: React.FC<ContactPropsType>  = ({image, imgAlt, link}) => {
    return (
        <span>
            <a href={link}>
                <img src={image} alt={imgAlt} className={s.socialIcon}/>
            </a>
        </span>
    )
}

type LinksPropsType = {
    contacts: Array<ContactType>
}
export const Links: React.FC<LinksPropsType> = ({contacts}) => {
    return (
        <span>
            {contacts.map((el,index) =><Contact key={index} image={el.image} imgAlt={el.imgAlt} link={el.link} /> )}
        </span>
    )
}