import React from 'react';
import s from "../../../components/Projects/Project/Project.module.css";

type PropsType = {
    title: string
    description: string
}

export const DescribeBlock: React.FC<PropsType> = ({title, description}) => {
    return (
        <div className={s.projectInfo}>
            <h3 className={s.projectTitle}>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
}