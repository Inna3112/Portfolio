import React from 'react';
import s from './Contact.module.scss';


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

