import React, { Component } from 'react';
import KEYS from '../constants';
import guineapig from '../audio/guinea-pig-daniel_simon.mp3';
import alpaca from '../audio/Alpaca_Mating_Call-Stephan_Schutze-949103590.mp3';
import frogs from '../audio/Frogs-Lisa_Redfern-1150052170.mp3';
import gibbonmonkey from '../audio/gibbon-monkey-daniel_simon.mp3';
import horseblow from '../audio/horse_blow-stephan_schutze-1678740304.mp3';
import labrador from '../audio/labrador-barking-daniel_simon.mp3';
import raccoon from '../audio/Raccoon-J_Dawg-688727657.mp3';
import turkey from '../audio/Turkey_Call-JimBob-1691466258.mp3';
import bluejay from '../audio/bluejay_call-Mike_Koenig-591302150.mp3';

const MAP = {
    Q: guineapig,
    W: horseblow,
    E: raccoon,
    A: bluejay,
    S: alpaca,
    D: frogs,
    Z: labrador,
    X: turkey,
    C: gibbonmonkey
};

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
        console.log(event.key);
        let keyedElement = document.getElementById(event.key.toUpperCase());
        if (!keyedElement) {
            return;
        }
        if (!keyedElement.paused) {
            keyedElement.pause();
        } else {
            keyedElement.play();
        }
    }

    render() {
        return (
            <div className="drum-pad" id={this.props.soundClip}>
                <audio className="clip" id={this.props.text} controls>
                    <source src={MAP[this.props.text]} />
                </audio>
                {this.props.text}
            </div>
        );
    }

}