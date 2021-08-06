import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";
import {StateType} from "./data/data";

type PropsType = StateType

const App: React.FC<PropsType> = ({skills, projects}) => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills skills={skills}/>
      <Projects projects={projects} />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
