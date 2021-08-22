import socialNetworkImg from '../assets/images/social-network.jpg';
import todo from '../assets/images/todo.jpg';
import gitIcon from '../assets/icons/contacts/032-github.svg'
import InstIcon from '../assets/icons/contacts/044-instagram.svg'
import linkedIcon from '../assets/icons/contacts/052-linkedin.svg'
import telegaIcon from '../assets/icons/contacts/090-telegram.svg'
import codeIcon from '../assets/icons/contacts/codewars.svg'
import browser from './../assets/images/053-web browser.svg'
import pencil from './../assets/images/038-pencil box.svg'
import rocket from './../assets/images/039-rocket.svg'
import checklist from './../assets/images/047-checklist.svg'
import mail from './../assets/icons/formInfoIcons/mail.svg'
import location from './../assets/icons/formInfoIcons/location.svg'
import phone from './../assets/icons/formInfoIcons/phone.svg'


export type StateType = typeof state
export type SkillType = {
    title: string
    description: string
    icon: string
    imgAlt: string
}
export type ProjectType = {
    title: string
    description: string
    style: any
    link: string
}
export type ContactType = {
    image: string
    imgAlt: string
    link: string
}
export type FormInfoItem = {
    image: string
    imgAlt: string
    description: string
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
            icon: browser,
            title: 'Foundations',
            description: 'JavaScript, TypeScript, HTML5, CSS3',
            imgAlt: '',
        },
        {
            icon: rocket,
            title: 'Development',
            description: 'React, Redux, Axios, Redux-toolkit',
            imgAlt: '',
        },
        {
            icon: checklist,
            title: 'Testing',
            description: 'Unit Tests, SnapShot, Storybook',
            imgAlt: '',
        },
        {
            icon: pencil,
            title: 'Design',
            description: 'Material UI, Ant-Design ',
            imgAlt: '',
        },
    ],
    projects: [
        {
            title: 'Social network',
            description: 'React, Redux, Redux-Form, REST API, Typescript, CSS-Modules. A social networking service. ' +
                'An online platform for people to build social networks or social relationships with other people.',
            style: socialNetwork,
            link: 'https://github.com/Inna3112/social-network-new',
        },
        {
            title: 'Todolist',
            description: 'React, Redux, REST API, Typescript, Formik, Material-UI, Storybook, Unit-tests. ' +
                'An app for Task Management, Project Management, Productivity.',
            style: todoList,
            link: 'https://github.com/Inna3112/TodoList',
        }
    ],
    contacts:  [
        {image: gitIcon, imgAlt: 'git',link:'https://github.com/Inna3112'},
        {image: InstIcon, imgAlt: 'inst',link:'https://www.instagram.com/innafomichova/'},
        {image: linkedIcon, imgAlt: 'in',link:'https://www.linkedin.com/in/inna-fomichova-466093214/'},
        {image: telegaIcon, imgAlt: 'telegram',link:'https://t.me/InnaFSS'},
        {image: codeIcon, imgAlt: 'codewars',link:'https://www.codewars.com/users/Inna3112'},
    ],
    formInfoItems : [
        {image: mail, imgAlt: 'mail',description:'innula3113@gmail.com'},
        {image: location, imgAlt: 'location',description:'Krywyi Rih, Ukraine'},
        {image: phone, imgAlt: 'phone',description:'+380967708048'},
    ]
}
