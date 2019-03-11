import React, { Component } from 'react';
import Display from './Display';
import DrumPad from './DrumPad';
import CONSTANTS from '../constants';
import actions from '../actions/drumPadActions.js';

export default class DrumMachine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'default',
        };
        this.messageHandler = this.messageHandler.bind(this);
    }

    messageHandler(event) {
        this.setState({
            text: "a noise has been made",
        });
        actions.handleClick(event);
    }

    render() {
        let cells = [];
        for (let key of Object.keys(CONSTANTS)) {
            cells.push(<DrumPad key={key} soundClip={key} text={CONSTANTS[key].text} handler={this.messageHandler}/>);
        }

        return (
            <div id="drum-machine">
                {cells}
                <Display innerText={this.state.text}/>
            </div>
        );
    }

}