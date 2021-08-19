import React from 'react';
import s from './Skills.module.scss';
import sContainer from './../../common/stiles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/components/title/Title";
import {SkillType} from "../../data/data";


type PropsType = {
    skills: Array<SkillType>
}

export const Skills: React.FC<PropsType> = ({skills}) => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    {skills.map((skill, index) => {
                        return <Skill key={index}
                                      title={skill.title}
                                      description={skill.description}
                                      icon={skill.icon}
                                      imgAlt={skill.imgAlt}
                        />
                    })}
                </div>
            </div>
        </div>
    );
}