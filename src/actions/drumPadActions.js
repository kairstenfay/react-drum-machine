import KEYS from "../constants";

function togglePlay(element) {
    if (!element) {
        return;
    }
    element.paused ? element.play() : element.pause();
}

function handleKeyPress(event) { // event.type === 'keydown'
    console.log(event);
    const keyedElement = document.getElementById(event.key.toUpperCase());
    togglePlay(keyedElement);
}

function handleClick(event) {  // event.type === 'click'
    const clickedElementId = event.target.id;

    // remap to drum pad
    const idValue = clickedElementId.replace(/_icon/, '');
    const key = KEYS[idValue].text;
    const clickedElement = document.getElementById(key);

    togglePlay(clickedElement);
}

export default {handleKeyPress, handleClick};