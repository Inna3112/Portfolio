import React from 'react';
import s from './Projects.module.css';
import sContainer from './../../common/stiles/Container.module.css'
import {Project} from './Project/Project';
import {Title} from '../../common/components/title/Title';
import socialNetworkImg from './../../assets/images/social-network.jpg';
import todo from './../../assets/images/todo.jpg';

export const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImg})`,
    }
    const todoList = {
        backgroundImage: `url(${todo})`,
    }
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    <Project title={'Social network'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..'}
                             style={socialNetwork}
                    />
                    <Project title={'To do list'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}
                        style={todoList}
                    />
                </div>
            </div>
        </div>
    );
}