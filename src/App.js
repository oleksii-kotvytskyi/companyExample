import React, { Component } from 'react'
import { Responsive, Dimmer, Loader } from 'semantic-ui-react';
import './App.css';
import { Header } from './components/Header/Header';
import { AboutAs } from "./components/Main/AboutAs";
import { WhatWeDo } from "./components/Main/WhatWeDo";
import { Jobs } from "./components/Main/Jobs";
import { Footer } from "./components/Footer/Footer";
import { isBrowser, getWidth } from "./utils/Utils";
import updateContent from './actions/updateContent';


export class App extends Component {
    componentDidMount = () => updateContent(this.props.language, this.props.setUIContent);

    render () {
        const {
            setUIWidth,
            contentHeader,
            contentAbout,
            contentJobs,
        } = this.props;

        return (
            contentHeader && Object.keys(contentHeader).length > 0
                ?
                <Responsive getWidth={() => {setUIWidth(isBrowser() ? getWidth() : 0)}}>
                    <div className="App">
                        <Header sectionData={contentHeader} />
                        <AboutAs sectionData={contentAbout} />
                        <WhatWeDo />
                        <Jobs sectionData={contentJobs} />
                        <Footer sectionData={contentAbout} />
                    </div>
                </Responsive>
                :
                <Dimmer active>
                    <Loader size='large'>Loading...</Loader>
                </Dimmer>
        );
    }
}

export default App;
