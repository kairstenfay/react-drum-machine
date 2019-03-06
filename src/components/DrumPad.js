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

import guineapigImg from '../img/guineapig.png';
import alpacaImg from '../img/alpaca.png';
import frogImg from '../img/frog.png';
import gibbonmonkeyImg from '../img/gibbonmonkey.png';
import horseImg from '../img/horse.png';
import labradorImg from '../img/labrador.png';
import raccoonImg from '../img/raccoon.jpeg';
import turkeyImg from '../img/turkey.png';
import bluejayImg from '../img/bluejay.png';


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

const IMGMAP = {
    Q: guineapigImg,
    W: horseImg,
    E: raccoonImg,
    A: bluejayImg,
    S: alpacaImg,
    D: frogImg,
    Z: labradorImg,
    X: turkeyImg,
    C: gibbonmonkeyImg
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
                <img class="pad-icon" src={IMGMAP[this.props.text]} />
                <audio className="clip" id={this.props.text} controls>
                    <source src={MAP[this.props.text]} />
                </audio>
                {this.props.text}
            </div>
        );
    }

}