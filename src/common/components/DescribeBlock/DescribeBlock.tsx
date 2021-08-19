import React from 'react';
import s from './DescribeBlock.module.scss'

type PropsType = {
    title: string
    description: string
}

export const DescribeBlock: React.FC<PropsType> = ({title, description}) => {
    return (
        <div className={s.describeInfo}>
            <h3 className={s.describeTitle}>{title}</h3>
            <span className={s.describeDescription}>{description}</span>
        </div>
    );
}