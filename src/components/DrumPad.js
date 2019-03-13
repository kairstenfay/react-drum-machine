import React, { Component } from 'react';
const CONSTANTS = require('../constants.js');

export default class DrumPad extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        document.addEventListener('keydown', this.props.handler);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.props.handler);
    }

    render() {
        return (
            <div className="drum-pad" id={this.props.soundClip} onClick={this.props.handler}>
                <img className="pad-icon" src={CONSTANTS.MAP[this.props.text].img} alt={this.props.soundClip}
                     id={this.props.soundClip + '_icon'} />
                <audio className="clip" id={this.props.text} src={CONSTANTS.MAP[this.props.text].audio} />
                {this.props.text}
            </div>

        );
    }
}
