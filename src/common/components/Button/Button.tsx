import React from 'react';
import s from './Button.module.scss';

type PropsType = {
    title: string
    href: string
}
export const Button = ({title, href}: PropsType) => {
    return (<>
            <a href={href} className={s.button}>{title}</a>
        </>
    );
}