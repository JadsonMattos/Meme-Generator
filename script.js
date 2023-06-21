const inputText = document.getElementById('text-input');
const text = document.getElementById('meme-text');
const inputImage = document.getElementById('meme-insert');
const meme = document.getElementById('meme-image');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const memeContainer = document.getElementById('meme-image-container');
const readyMeme = document.querySelectorAll('.meme');

const showText = () => {
  text.textContent = inputText.value;
};

const showImage = (event) => {
  meme.src = URL.createObjectURL(event.target.files[0]);
};

const addBorder = (button, borderWidth, borderStyle, borderColor) => {
  button.addEventListener('click', () => {
    memeContainer.style.border = `${borderWidth}px ${borderStyle} ${borderColor}`;
  });
};

const display = (event) => {
  const thumb = event.target;
  const memeId = thumb.id.split('-')[1];
  const path = `imgs/meme${memeId}.png`;
  meme.src = path;
};

readyMeme.forEach((thumb) => {
  thumb.addEventListener('click', display);
});
inputText.addEventListener('input', showText);
inputImage.addEventListener('change', showImage);
addBorder(fireButton, 3, 'dashed', 'rgb(255, 0, 0)');
addBorder(waterButton, 5, 'double', 'rgb(0, 0, 255)');
addBorder(earthButton, 6, 'groove', 'rgb(0, 128, 0)');
