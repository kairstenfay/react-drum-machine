import CONSTANTS from "../constants";

function togglePlay(element) {
    if (!element) {
        return;
    }
    console.log(element);
    element.paused ? element.play() : element.pause();
}

function handleKeyPress(event) { // event.type === 'keydown'
    const keyedElement = document.getElementById(event.key.toUpperCase());
    console.log(event.key);

    togglePlay(keyedElement);
}

function handleClick(event) {  // event.type === 'click'
    const clickedElementId = event.target.id;

    // remap to drum pad
    const idValue = clickedElementId.replace(/_icon/, '');
    const key = CONSTANTS.KEYS[idValue].text;
    const clickedElement = document.getElementById(key);
    console.log(key);

    togglePlay(clickedElement);
}

export default {handleKeyPress, handleClick};