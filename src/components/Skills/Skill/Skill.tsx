import React from 'react';
import s from './Skill.module.css';
import browser from './../../../assets/images/053-web browser.svg'
import {DescribeBlock} from "../../../common/components/DescribeBlock/DescribeBlock";


type PropsType = {
    title: string
    description: string
    icon: string
}
export const Skill = ({title, description, icon}: PropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <img src='./../../../assets/images/053-web browser.svg' />
            </div>
            <DescribeBlock title={title} description={description} />
        </div>
    );
}