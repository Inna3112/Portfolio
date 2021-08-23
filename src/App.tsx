import React from 'react';
import './App.css';
import s from './App.module.scss'
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {Skills} from './components/Skills/Skills';
import {Projects} from './components/Projects/Projects';
import {Contacts} from './components/Contacts/Contacts';
import {StateType} from './data/data';
import {ScrollUp} from './components/ScrollUp/ScrollUp';
import {Footer} from './components/Footer/Footer';
import {CustomCursor} from './components/CustomCursor/CustomCursor';

type PropsType = StateType

const App: React.FC<PropsType> = ({skills, projects, contacts, formInfoItems}) => {
    return (
        <div className={s.app}>
            <ScrollUp/>
            <Header/>
            <Main/>
            <Skills skills={skills}/>
            <Projects projects={projects}/>
            <Contacts formInfoItems={formInfoItems}/>
            <Footer contacts={contacts}/>
            <CustomCursor />
        </div>
    );
}

export default App;
