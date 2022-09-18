import React from 'react';
import s from './Projects.module.scss';
import sContainer from '../../common/stiles/Container.module.scss'
import {Title} from '../../common/components/title/Title';
import {ProjectType} from '../../data/data';
import {Project} from './Project/Project';

type PropsType = {
    projects: Array<ProjectType>
}
export const Projects: React.FC<PropsType> = ({projects}) => {

    return (
        <div id='projects' className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    {projects.map((project, index) => {
                        return <Project key={index}
                                        id={index.toString()}
                                        style={project.style}
                                        title={project.title}
                                        description={project.description}
                                        href={project.link}
                        />
                    })}
                </div>
            </div>
        </div>
    );
}
