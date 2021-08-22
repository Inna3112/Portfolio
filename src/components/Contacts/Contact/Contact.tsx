import React from 'react';
import s from './Contact.module.scss';
import {FormInfoItem} from "../../../data/data";


type PropsType = {
    formInfoItems: Array<FormInfoItem>
}
export const FormContact: React.FC<PropsType> = ({formInfoItems}) => {

    const contactItem = formInfoItems.map((el, index) => {
        return (
            <div key={index}>
                <img src={el.image} alt={el.imgAlt}/>
                <div>{el.description}</div>
            </div>)
    })

    return (
        <div className={s.contact}>
            {contactItem}
        </div>
    );
}