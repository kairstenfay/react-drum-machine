import React, { Component } from 'react';
const CONSTANTS = require('../constants.js');

export default class Display extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        console.log(CONSTANTS.MAP[this.props.displayText]);  // TODO 

        return (
            <div id="display">
                {/*{CONSTANTS.MAP[this.props.displayText]}*/}
            </div>
        );
    }

}