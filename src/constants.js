const guineapig = require('./audio/guinea-pig-daniel_simon.mp3');
const alpaca = require('./audio/Alpaca_Mating_Call-Stephan_Schutze-949103590.mp3');
const frogs = require('./audio/Frogs-Lisa_Redfern-1150052170.mp3');
const gibbonmonkey = require('./audio/gibbon-monkey-daniel_simon.mp3');
const horseblow = require('./audio/horse_blow-stephan_schutze-1678740304.mp3');
const labrador = require('./audio/labrador-barking-daniel_simon.mp3');
const raccoon = require('./audio/Raccoon-J_Dawg-688727657.mp3');
const turkey = require('./audio/Turkey_Call-JimBob-1691466258.mp3');
const bluejay = require('./audio/bluejay_call-Mike_Koenig-591302150.mp3');

const guineapigImg = require('./img/guineapig.png');
const alpacaImg = require('./img/alpaca.png');
const frogImg = require('./img/frog.png');
const gibbonmonkeyImg = require('./img/gibbonmonkey.png');
const horseImg = require('./img/horse.png');
const labradorImg = require('./img/labrador.png');
const raccoonImg = require('./img/raccoon.jpeg');
const turkeyImg = require('./img/turkey.png');
const bluejayImg = require('./img/bluejay.png');

module.exports = {
    MAP: {
        Q: {innerText: 'guinea pig squealing', AUDIO: guineapig, IMG: guineapigImg},
        W: {innerText: 'horse blowing', AUDIO: horseblow, IMG: horseImg},
        E: {innerText: 'racoon squeaking', AUDIO: raccoon, IMG: raccoonImg},
        A: {innerText: 'blue jay singing', AUDIO: bluejay, IMG: bluejayImg},
        S: {innerText: 'alpaca grunting', AUDIO: alpaca, IMG: alpacaImg},
        D: {innerText: 'frogs croaking', AUDIO: frogs, IMG: frogImg},
        Z: {innerText: 'dog barking', AUDIO: labrador, IMG: labradorImg},
        X: {innerText: 'turkey gobbling', AUDIO: turkey, IMG: turkeyImg},
        C: {innerText: 'monkeys hooting', AUDIO: gibbonmonkey, IMG: gibbonmonkeyImg}
    },
    // IMGMAP: {
    //     Q: guineapigImg,
    //     W: horseImg,
    //     E: raccoonImg,
    //     A: bluejayImg,
    //     S: alpacaImg,
    //     D: frogImg,
    //     Z: labradorImg,
    //     X: turkeyImg,
    //     C: gibbonmonkeyImg
    // },

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