import React, { Component } from 'react';
import CONSTANTS from '../constants';
import guineapig from '../audio/guinea-pig-daniel_simon.mp3';

export default class DrumPad extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress(event) {
        if (event.keyCode === 81) {
            document.getElementById('Q').play();
        }
    }

    render() {
        console.log("soundClip is: " + this.props.soundClip);
        console.log("Text is: " + this.props.text);
        console.log(CONSTANTS[this.props.soundClip].src);
        return (
            <div className="drum-pad" id={this.props.soundClip}>
                <audio className="clip" id={this.props.text} controls>
                    <source src={guineapig} />
                    {/*{CONSTANTS[this.props.soundClip].src} />*/}
                </audio>
                {this.props.text}
            </div>
        );
    }

}