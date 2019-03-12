import React, { Component } from 'react';
const CONSTANTS = require('../constants.js');

export default class Display extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
    }

    render() {
        let obj = CONSTANTS.MAP[this.props.displayText];
        let displayText = obj ? obj.text : 'Press a drum pad to play a sound';

        return (
            <div id="display">
                {displayText}
            </div>
        );
    }

}