import React from 'react';
import s from './FormContact.module.scss';
import {FormInfoItem} from '../../../data/data';


type PropsType = {
    formInfoItems: Array<FormInfoItem>
}
export const FormContact: React.FC<PropsType> = ({formInfoItems}) => {

    return (
        <div className={s.contact}>
            {formInfoItems.map((el, index) => {
                return (
                    <div className={s.contactItem} key={index}>
                        <img src={el.image} alt={el.imgAlt}/>
                        <div className={s.description}>{el.description}</div>
                    </div>)})}
        </div>
    );
}