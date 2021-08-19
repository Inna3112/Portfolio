import React from 'react';
import s from './Project.module.css';
import {DescribeBlock} from "../../../common/components/DescribeBlock/DescribeBlock";
import {Button} from "../../../common/components/Button/Button";

type PropsType = {
    style: any
    title: string
    description: string
}
export const Project = ({title, description, style}: PropsType) => {
    return (
        <div className={s.project}>
            <div style={style} className={s.img}>
                <Button title={'Look'} />
                {/*<button className={s.button}>Look</button>*/}
            </div>
            <DescribeBlock title={title} description={description} />
        </div>
    );
}