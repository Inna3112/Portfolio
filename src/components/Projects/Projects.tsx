import React from 'react';
import s from './Projects.module.css';
import sContainer from './../../common/stiles/Container.module.css'
import {Project} from './Project/Project';

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    <Project title={'Social network'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..'}/>
                    <Project title={'To do list'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et d'}/>
                </div>
            </div>
        </div>
    );
}