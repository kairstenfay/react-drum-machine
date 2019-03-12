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
        let displayText = obj ? obj.text : 'nothing yet. Press a drum pad to play a sound';
        // TODO this displays any time an incorrect key is selected

        return (
            <div id="display">
                You're listening to {displayText}
            </div>
        );
    }

}