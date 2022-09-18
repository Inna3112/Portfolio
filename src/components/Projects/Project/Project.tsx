import React from 'react';
import s from './Project.module.scss';
import {DescribeBlock} from '../../../common/components/DescribeBlock/DescribeBlock';
import {Button} from '../../../common/components/Button/Button';

type PropsType = {
    id: string
    style: any
    title: string
    description: string
    href: string
}

export const Project = ({id, title, description, style, href}: PropsType) => {

    return (
        <div className={s.project}>
            <div style={style} className={s.img}>
                 <Button projectId={id} title={'Look'} href={href} />
            </div>
            <DescribeBlock title={title} description={description} />
        </div>
    );
}
