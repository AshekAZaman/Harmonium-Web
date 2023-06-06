// Get all the white and black keys
const whiteKeys = document.querySelectorAll('.white-key');
const blackKeys = document.querySelectorAll('.black-key');

// Add mousedown event listener to each key
whiteKeys.forEach(key => {
  key.addEventListener('mousedown', () => playNote(key));
});

blackKeys.forEach(key => {
  key.addEventListener('mousedown', () => playNoteByKeyNumber(key));
});

// Function to play a note when a key is pressed
function playNoteByKeyNumber(key) {
  const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add('active');
  setTimeout(() => {
    key.classList.remove('active');
  }, 200);
}

function playNote (key) {
  const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add('active');
  setTimeout(() => {
    key.classList.remove('active');
  }, 200);
}
