import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react';
import './App.css';
import { Header } from './components/Header/Header';
import { AboutAs } from "./components/Main/AboutAs";
import { WhatWeDo } from "./components/Main/WhatWeDo";
import { Jobs } from "./components/Main/Jobs";
import { Footer } from "./components/Footer/Footer";
import { isBrowser, getWidth } from "./utils/Utils";


const SERVER_URL = 'http://192.168.0.105/chunks?key=';

export class App extends Component {

    constructor (props) {
        super(props);
        this.loadContent();
    }

    loadContent (lang) {
        const { language, setUIContent, } = this.props;
        const key = 'sun_content_' + (lang || language);

        if (localStorage.getItem(key))
            setUIContent(JSON.parse(localStorage.getItem(key)));
        else
            fetch(SERVER_URL + key).then(function(response) {
                response.json().then( (response) => {
                    if (response.ok) {
                        const uiContentData = {...response.result};
                        localStorage.setItem(key, JSON.stringify(uiContentData));
                        setUIContent(uiContentData);
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

        const changeLanguage = (lang) => {
            setUILanguage(lang);
            this.loadContent(lang);
        };

        return (
            <Responsive getWidth={() => {setUIWidth(isBrowser() ? getWidth() : 0)}}>
                <div className="App">
                    <Header sectionData={contentHeader} />
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
