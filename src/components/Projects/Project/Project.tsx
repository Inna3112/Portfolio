import React from 'react';
import s from './Project.module.css';
import {DescribeBlock} from "../../../common/components/DescribeBlock/DescribeBlock";

type PropsType = {
    style: any
    title: string
    description: string
}
export const Project = ({title, description, style}: PropsType) => {
    return (
        <div className={s.project}>
            <div style={style} className={s.img}>
                <button className={s.button}>Look</button>
            </div>
            <DescribeBlock title={title} description={description} />
            {/*<div className={s.projectInfo}>*/}
            {/*    <h3 className={s.projectTitle}>{title}</h3>*/}
            {/*    <span className={s.description}>{description}</span>*/}
            {/*</div>*/}
        </div>
    );
}