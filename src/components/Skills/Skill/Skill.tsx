import React from 'react';
import s from './Skill.module.scss';
import {DescribeBlock} from '../../../common/components/DescribeBlock/DescribeBlock';


type PropsType = {
    title: string
    description: string
    icon: string
    imgAlt: string
}
export const Skill = ({title, description, icon, imgAlt}: PropsType) => {
    return (
        <div className={s.skill}>
            <img src={icon} alt={imgAlt} />
            <DescribeBlock title={title} description={description}/>
        </div>
    );
}