import React, { Component } from 'react';
import Display from './Display';
import DrumPad from './DrumPad';
import CONSTANTS from '../constants';
import actions from '../actions/drumPadActions.js';

export default class DrumMachine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayText: 'default',
        };
        this.eventHandler = this.eventHandler.bind(this);
        this.setMessage = this.setMessage.bind(this);
    }

    eventHandler(event) {
        console.log(event);
        let key = event.type === 'click' ? actions.handleClick(event) : actions.handleKeyPress(event);
        this.setMessage(key);
    }

    setMessage(key) {
        this.setState({  // TODO: update text using event key + MAP
            displayText: key,
        });
    }

    render() {
        let cells = [];
        for (let key of Object.keys(CONSTANTS.KEYS)) {
            cells.push(
                <DrumPad key={key} soundClip={key} text={CONSTANTS.KEYS[key].text} handler={this.eventHandler} />
            );
        }

        return (
            <div id="drum-machine">
                {cells}
                <Display displayText={this.state.displayText}/>
            </div>
        );
    }

}