import React, { Component } from 'react';
import Display from './Display';
import DrumPad from './DrumPad';
import CONSTANTS from '../constants';

export default class DrumMachine extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        let cells = [];
        for (let key of Object.keys(CONSTANTS)) {
            console.log(key);
            console.log(CONSTANTS[key].text);
            cells.push(<DrumPad soundClip={key} text={CONSTANTS[key].text} />);
        }

        return (
            <div id="drum-machine">
                {cells}
                <Display />
            </div>
        );
    }

}