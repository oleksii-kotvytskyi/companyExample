import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react';
import './App.css';
import { Header } from './components/Header/Header';
import { AboutAs } from "./components/Main/AboutAs";
import { WhatWeDo } from "./components/Main/WhatWeDo";
import { Jobs } from "./components/Main/Jobs";
import { Footer } from "./components/Footer/Footer";
import { isBrowser, getWidth } from "./utils/Utils";


export class App extends Component {

    render () {
        const {width, changeUIWidth} = this.props;
        return (
            <Responsive getWidth={() => {changeUIWidth(isBrowser() ? getWidth() : 0)}}>
                <div className="App">
                    <Header />
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
