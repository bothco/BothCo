const bothImage = document.getElementById('both-img');
var imageIndex = 0;

if (bothImage) {
  bothImage.addEventListener('click', swapBothImage);
}

function swapBothImage() {
  const images = [
    'http://www.reactiongifs.com/r/bth.gif',
    'https://media1.giphy.com/media/3ohzdMDbNXvnWdeOZi/giphy.gif',
    'https://media2.giphy.com/media/3o85xIO33l7RlmLR4I/giphy.gif',
    'https://media3.giphy.com/media/TtFqXVtOQkomI/giphy.gif'
  ];

  imageIndex = (imageIndex === images.length - 1) ? 0 : imageIndex + 1;
  bothImage.setAttribute('src', images[imageIndex]);          
}