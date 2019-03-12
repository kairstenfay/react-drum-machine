import CONSTANTS from "../constants";

function togglePlay(element) {
    if (!element) {
        return;
    }
    element.paused ? element.play() : element.pause();
}

/**
 * Gets targeted element
 *
 * @param event
 */
function handleKeyPress(event) {  // event.type === 'keydown'
    const keyedElement = document.getElementById(event.key.toUpperCase());

    togglePlay(keyedElement);

    return event.key.toUpperCase();
}

/**
 * Gets targeted element
 *
 * @param event
 */
function handleClick(event) {  // event.type === 'click'
    const clickedElementId = event.target.id;

    // remap to drum pad
    const idValue = clickedElementId.replace(/_icon/, '');
    const key = CONSTANTS.KEYS[idValue].text;
    const clickedElement = document.getElementById(key);

    togglePlay(clickedElement);

    return key;
}

export default {handleKeyPress, handleClick};