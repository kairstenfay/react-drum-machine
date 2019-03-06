import React, { Component } from 'react';
import CONSTANTS from '../constants';
import guineapig from '../audio/guinea-pig-daniel_simon.mp3';
import bluejay from '../audio/bluejay_call-Mike_Koenig-591302150.mp3';
import alpaca from '../audio/Alpaca_Mating_Call-Stephan_Schutze-949103590.mp3';
import frogs from '../audio/Frogs-Lisa_Redfern-1150052170.mp3';
import gibbonmonkey from '../audio/gibbon-monkey-daniel_simon.mp3';
import horseblow from '../audio/horse_blow-stephan_schutze-1678740304.mp3';
import labrador from '../audio/labrador-barking-daniel_simon.mp3';
import raccoon from '../audio/Raccoon-J_Dawg-688727657.mp3';
import turkey from '../audio/Turkey_Call-JimBob-1691466258.mp3';

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
        console.log(this.props.id);

        return (
            <div className="drum-pad" id={this.props.soundClip}>
                <audio className="clip" id={this.props.text} controls>
                    <source src={this.props.id} />
                </audio>
                {this.props.text}
            </div>
        );
    }

}