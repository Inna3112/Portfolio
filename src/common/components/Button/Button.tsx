import React from 'react';
import s from './Button.module.scss';

type PropsType = {
    title: string
    href: string
    projectId: string
}
export const Button = ({title, href, projectId}: PropsType) => {
    return (
        <>
            <a id={projectId} href={href} target="_blank" rel='noreferrer' className={s.button}>{title}</a>
        </>
    );
}
