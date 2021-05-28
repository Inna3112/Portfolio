import React from 'react';
import s from './Project.module.css';

type PropsType = {
    title: string
    description: string
}
export const Project = ({title, description}: PropsType) => {
    return (
        <div className={s.project}>
            <div className={s.img}>
                <button className={s.button}></button>
            </div>
            <h3>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
}