const guineapig = require('./audio/guinea-pig-daniel_simon.mp3');
const alpaca = require('./audio/Alpaca_Mating_Call-Stephan_Schutze-949103590.mp3');
const frogs = require('./audio/Frogs-Lisa_Redfern-1150052170.mp3');
const gibbonmonkey = require('./audio/gibbon-monkey-daniel_simon.mp3');
const horseblow = require('./audio/horse_blow-stephan_schutze-1678740304.mp3');
const labrador = require('./audio/labrador-barking-daniel_simon.mp3');
const raccoon = require('./audio/Raccoon-J_Dawg-688727657.mp3');
const turkey = require('./audio/Turkey_Call-JimBob-1691466258.mp3');
const bluejay = require('./audio/bluejay_call-Mike_Koenig-591302150.mp3');

const guineapigimg = require('./img/guineapig.png');
const alpacaimg = require('./img/alpaca.png');
const frogimg = require('./img/frog.png');
const gibbonmonkeyimg = require('./img/gibbonmonkey.png');
const horseimg = require('./img/horse.png');
const labradorimg = require('./img/labrador.png');
const raccoonimg = require('./img/raccoon.jpeg');
const turkeyimg = require('./img/turkey.png');
const bluejayimg = require('./img/bluejay.png');

module.exports = {
    MAP: {
        Q: {innerText: 'guinea pig squealing', audio: guineapig, img: guineapigimg},
        W: {innerText: 'horse blowing', audio: horseblow, img: horseimg},
        E: {innerText: 'racoon squeaking', audio: raccoon, img: raccoonimg},
        A: {innerText: 'blue jay singing', audio: bluejay, img: bluejayimg},
        S: {innerText: 'alpaca grunting', audio: alpaca, img: alpacaimg},
        D: {innerText: 'frogs croaking', audio: frogs, img: frogimg},
        Z: {innerText: 'dog barking', audio: labrador, img: labradorimg},
        X: {innerText: 'turkey gobbling', audio: turkey, img: turkeyimg},
        C: {innerText: 'monkeys hooting', audio: gibbonmonkey, img: gibbonmonkeyimg}
    },

    KEYS: {
        guineapig: {text: 'Q', src: '../audio/guinea-pig-daniel_simon.mp3'},
        horseblow: {text: 'W', src: '../audio/horse_blow-stephan_schutze-1678740304.mp3'},
        raccoon: {text: 'E', src: '../audio/Raccoon-J_Dawg-688727657.mp3'},
        bluejay: {text: 'A', src: '../audio/bluejay_call-Mike_Koenig-591302150.mp3'},
        alpaca: {text: 'S', src: '../audio/Alpaca_Mating_Call-Stephan_Schutze-949103590.mp3'},
        frogs: {text: 'D', src: '../audio/Frogs-Lisa_Redfern-1150052170.mp3'},
        labrador: {text: 'Z', src: '../audio/labrador-barking-daniel_simon.mp3'},
        turkey: {text: 'X', src: '../audio/Turkey_Call-JimBob-1691466258.mp3'},
        gibbonmonkey: {text: 'C', src: '../audio/gibbon-monkey-daniel_simon.mp3'},
    }
};