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

        let displayText;
        if (obj) {
            console.log(obj);
            displayText = obj.innerText;
        } else {
            displayText = 'default';
        }
        console.log(displayText);

        return (
            <div id="display">
                {displayText}
            </div>
        );
    }

}