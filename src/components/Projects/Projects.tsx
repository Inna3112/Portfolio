import React from 'react';
import s from './Projects.module.css';
import sContainer from './../../common/stiles/Container.module.css'
import {Title} from '../../common/components/title/Title';
import {ProjectType} from "../../data/data";
import {Project} from "./Project/Project";

type PropsType = {
    projects: Array<ProjectType>
}
export const Projects: React.FC<PropsType> = ({projects}) => {

    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    {projects.map((project, index) => {
                        return <Project key={index}
                                        style={project.style}
                                        title={project.title}
                                        description={project.description} />
                    })}
                </div>
            </div>
        </div>
    );
}