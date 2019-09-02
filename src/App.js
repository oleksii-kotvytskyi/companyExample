import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react';
import './App.css';
import { Header } from './components/Header/Header';
import { AboutAs } from "./components/Main/AboutAs";
import { WhatWeDo } from "./components/Main/WhatWeDo";
import { Jobs } from "./components/Main/Jobs";
import { Footer } from "./components/Footer/Footer";
import { isBrowser, getWidth } from "./utils/Utils";


const SERVER_URL = 'http://localhost:3005/chunks?key=sun_content_';

export class App extends Component {

    constructor (props) {
        super(props);
        this.loadContent();
    }

    loadContent () {
        const { language, setUIContent, } = this.props;

        fetch(SERVER_URL + language).then(function(response) {
            response.json().then( (response) => {
                console.log('response', response);

                if (response.ok) {
                    setUIContent({
                        header: response.result.header,
                        intro: response.result.intro,
                        about: response.result.about,
                        wedo: response.result.wedo,
                        jobs: response.result.jobs,
                        footer: response.result.footer,
                    });
                }
            });
        });
    }

    render () {

        const {
            width,
            setUIWidth,
            setUILanguage,
            contentHeader,
            contentIntro,
            contentAbout,
            contentWeDo,
            contentJobs,
            contentFooter,
        } = this.props;

        return (
            <Responsive getWidth={() => {setUIWidth(isBrowser() ? getWidth() : 0)}}>
                <div className="App">
                    <Header setUILanguage={setUILanguage} />
                    <AboutAs />
                    <WhatWeDo />
                    <Jobs />
                    <Footer />
                </div>
            </Responsive>
        );
    }
}

export default App;
