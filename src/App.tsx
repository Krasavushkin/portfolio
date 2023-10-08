import './App.css';
import React from "react";
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import {Projects} from "./layout/section/projects/Projects";
import {Technologies} from "./layout/section/technologies/Technologies";
import {Experience} from "./layout/section/experience/Experience";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Projects />
            <Technologies />
            <Experience />
            <Footer />
        </div>
    );
}

export default App;

