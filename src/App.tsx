import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {Contacts} from "./components/Contacts/Contacts";
import {StateType} from "./data/data";
import {ScrollUp} from "./components/ScrollUp/ScrollUp";
import {Footer} from "./components/Footer/Footer";

type PropsType = StateType

const App: React.FC<PropsType> = ({skills, projects, contacts}) => {
    return (
        <div className="App">
            <ScrollUp/>
            <Header/>
            <Main/>
            <Skills skills={skills}/>
            <Projects projects={projects}/>
            <Contacts/>
            <Footer contacts={contacts}/>
        </div>
    );
}

export default App;
