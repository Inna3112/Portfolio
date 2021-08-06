import React from 'react';
import s from './Button.module.css';

type PropsType = {
    title: string
    type?: string
}
export const Button = ({title}: PropsType) => {
    return (<>
            <button className={s.button}>{title}</button>
        </>
    );
}