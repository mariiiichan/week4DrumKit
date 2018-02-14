//listen for a keypress' if we press the right key, then right key,then find the matching audio file and play it. If the key doesnt show up on the keyboard, the sript shouldnt do anything
(() => {
  console.log('drumkit file loaded!');
// remove the highlight from each element after a keypress / transition
  function removeHighLight(e) {
    console.log(e);
    //if this isnt the transform transition, then quit
    if (e.propertyName !== 'transform') {
      return;
    } else { // it IS the transform transition! Do stuff!
      e.target.classList.remove('playing');
    }
  }
// this should fire every time a key is pushed; do something interesting inside this function
  function playSound(e) {
    //debugger;

    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // add a highlight to the element on the screen (the keyboard key pressed)
    key.classList.add('playing');
    // if we press a key that doesn't have a corresponding audio element, then quit and don't do anything else
    if (!audio){ return; }
    // rewind any audio files before playing it
    audio.currentTime = 0;
    audio.play();
    //debugger;
  }
  // tell the browser to listen for a keypress event
  window.addEventListener('keydown', playSound);

//loop through all the keys and take the highlight back off when the transition is done
const keys =Array.from(document.querySelectorAll('.key')); // select all the key divs
keys.forEach(key => key.addEventListener('transitionend', removeHighLight));

  })();
