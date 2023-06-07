// Map computer keyboard keys to harmonium notes
const keyNotes = {
"q": "C3",
  "2": "Cs3",
  "w": "D3",
  "3": "Ds3",
  "e": "E3",
  "r": "F3",
  "5": "Fs3",
  "t": "G3",
  "6": "Gs3",
  "y": "A3",
  "7": "As3",
  "u": "B3",

  "i": "C4",
  "9": "Cs4",
  "o": "D4",
  "0": "Ds4",
  "p": "E4",
  "[": "F4",
  "=": "Fs4",
  "]": "G4",
  "\\": "Gs4",
  "a": "A4",
  ";": "As4",
  "s": "B4",

  "d": "C5",
  "'": "Cs5",
  "f": "D5",
  "`": "Ds5",
  "g": "E5",
  "h": "F5",
  "-": "Fs5",
  "j": "G5",
  ",": "Gs5",
  "k": "A5",
  ".": "As5",
  "l": "B5",
  
  ";": "C6",
  "'": "Cs6",
  "[": "D6",
  "]": "Ds6",
  "\\": "E6",
  "z": "F6"
};

// Get all the white and black keys
const whiteKeys = document.querySelectorAll('.white-key');
const blackKeys = document.querySelectorAll('.black-key');


// Add touchstart event listener to each key
whiteKeys.forEach(key => {
  key.addEventListener('touchstart', (event) => {
    const start = new Date();
    playNoteByKeyNumber(key, start);

    // Add touchend event listener to stop the audio when the touch is released
    key.addEventListener('touchend', () => {
      stopNote();
    });
  });
});

blackKeys.forEach(key => {
  key.addEventListener('touchstart', (event) => {
    const start = new Date();
    playNoteByKeyNumber(key, start);

    // Add touchend event listener to stop the audio when the touch is released
    key.addEventListener('touchend', () => {
      stopNote();
    });
  });
});

// Add mousedown event listener to each key
whiteKeys.forEach(key => {
  key.addEventListener('mousedown', () => {
    const start = new Date();
    playNoteByKeyNumber(key, start);

    // Add mouseup event listener to stop the audio when the mouse is released
    key.addEventListener('mouseup', () => {
      stopNote();
    });
  });
});

blackKeys.forEach(key => {
  key.addEventListener('mousedown', () => {
    const start = new Date();
    playNoteByKeyNumber(key, start);

    // Add mouseup event listener to stop the audio when the mouse is released
    key.addEventListener('mouseup', () => {
      stopNote();
    });
  });
});

// Add keydown event listener to the document object
document.addEventListener('keydown', event => {
  const key = event.key;

  // Play the corresponding note if there is one mapped to the pressed key
  if (key in keyNotes) {
    const start = new Date();
    playNoteByKeyNumber(document.querySelector(`[data-key="${keyNotes[key]}"]`), start);
  }
});

// Add keyup event listener to the document object
document.addEventListener('keyup', event => {
  const key = event.key;

  // Stop the corresponding note if there is one mapped to the released key
  if (key in keyNotes) {
    stopNoteByKeyNumber(document.querySelector(`[data-key="${keyNotes[key]}"]`));
  }
});

// Function to play a note when a key is pressed for a specific duration
function playNoteByKeyNumber(key, start) {
  const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);

  if (!audio) return;

  // Calculate the duration of the mouse press
  const end = new Date();
  const duration = end - start;

  // Set the audio playback rate based on the duration of the mouse press
  audio.playbackRate = 1 + (duration / 1000);

  // Play the audio and add the 'active' class to the key
  audio.currentTime = 0;
  audio.play();
  key.classList.add('active');
}

// Function to stop a note when a key is released
function stopNoteByKeyNumber(key) {
  const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
    key.classList.remove('active');
  }
}

// Function to stop the currently playing note
function stopNote() {
  const activeKeys = document.querySelectorAll('.active');

  activeKeys.forEach(key => {
    const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      key.classList.remove('active');
    }
  });
}
