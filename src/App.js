import React, {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
const date = new Date().toLocaleTimeString();
function Tick() {

    const element = (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
                This app was activated at {date}. The Current time is
                <bold>{new Date().toLocaleTimeString()}</bold>
                .
            </p>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    )

}
setInterval(Tick, 1000);

