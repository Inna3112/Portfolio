import {Project} from "../components/Projects/Project/Project";
import React from "react";
import socialNetworkImg from "../assets/images/social-network.jpg";
import todo from "../assets/images/todo.jpg";

export type StateType = typeof state

export type SkillType = {
    title: string
    description: string
    icon: string
}
export type ProjectType = {
    title: string
    description: string
    style: any
}
const socialNetwork = {
    backgroundImage: `url(${socialNetworkImg})`,
}
const todoList = {
    backgroundImage: `url(${todo})`,
}

export const state = {
    skills: [
        {
            icon: './../../assets/images/053-web browser.svg',
            title: 'Foundations',
            description: 'JavaScript, TypeScript, HTML5, CSS3',
        },
        {
            icon: './../../assets/images/053-web browser.svg',
            title: 'Development',
            description: 'React, Redux, Axios, Redux-toolkit',
        },
        {
            icon: './../../assets/images/053-web browser.svg',
            title: 'Testing',
            description: 'Unit Tests, SnapShot, Storybook',
        },
        {
            icon: './../../assets/images/053-web browser.svg',
            title: 'Design',
            description: 'Material UI, Ant-Design ',
        },
    ],
    projects: [
        {
            title: 'Social network',
            description: 'React, Redux, Redux-Form, REST API, Typescript, CSS-Modules. A social networking service. An online platform for people to build social networks or social relationships with other people.',
            style: socialNetwork,
        },
        {
            title: 'Todolist',
            description: 'React, Redux, REST API, Typescript, Formik, Material-UI, Storybook, Unit-tests. An app for Task Management, Project Management, Productivity.',
            style: todoList,
        }
    ]
    // contacts:  [
    //     {image: gitIcon, imgAlt: 'git',link:'https://github.com/valtikamore'},
    //     {image: InstIcon, imgAlt: 'inst',link:'https://www.instagram.com/valtikamore/'},
    //     {image: linkedIcon, imgAlt: 'in',link:'https://www.linkedin.com/in/valentin-kalchevski-841055207/'},
    //     {image: telegaIcon, imgAlt: 'telegram',link:'https://t.me/Valtikamore'},
    //     {image: codeIcon, imgAlt: 'codewars',link:'https://www.codewars.com/users/valtikamore'},
    // ],
    // formInfoItems : [
    //     {image: mail, imgAlt: 'mail',description:'valtikamore@gmail.com'},
    //     {image: location, imgAlt: 'location',description:'Minsk,Belarus'},
    //     {image: phone, imgAlt: 'phone',description:'+375(25)-732-18-33'},
    // ]
}
