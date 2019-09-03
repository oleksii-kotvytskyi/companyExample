import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react';
import './App.css';
import { Header } from './components/Header/Header';
import { AboutAs } from "./components/Main/AboutAs";
import { WhatWeDo } from "./components/Main/WhatWeDo";
import { Jobs } from "./components/Main/Jobs";
import { Footer } from "./components/Footer/Footer";
import { isBrowser, getWidth } from "./utils/Utils";
import request from './actions/request';


const SERVER_URL = 'http://192.168.0.105/chunks?key=';

export class App extends Component {

    constructor (props) {
        super(props);
        request(props.language, props.setUIContent);
    }

    render () {

        const {
            setUIWidth,
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
