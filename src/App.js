import React, { Component } from 'react'
import { Responsive, Dimmer, Loader } from 'semantic-ui-react';
import './App.css';
import { Header } from './components/Header/Header';
import { AboutAs } from "./components/Main/AboutAs";
import { WhatWeDo } from "./components/Main/WhatWeDo";
import { Jobs } from "./components/Main/Jobs";
import { Footer } from "./components/Footer/Footer";
import { getWidth } from "./utils/Utils";


export class App extends Component {

    render () {
        return (
            // contentHeader && Object.keys(contentHeader).length > 0
            //     ?
                <Responsive getWidth={getWidth}>
                    <div className="App">
                        <Header />
                        <AboutAs />
                        <WhatWeDo />
                        <Jobs />
                        <Footer />
                    </div>
                </Responsive>
                // :
                // <Dimmer active>
                //     <Loader size='large'>Loading...</Loader>
                // </Dimmer>
        );
    }
}

export default App;
