const bothImage = document.getElementById('both-img');
const bothLogo = document.getElementById('both-logo');
let imageIndex = 0;

if (bothImage) {
  bothImage.addEventListener('click', swapBothImage);
  bothImage.addEventListener('dragstart', dragStart, false);
  bothLogo.addEventListener('dragstart', dragStart, false);
  document.body.addEventListener('dragover', dragOver, false);
  document.body.addEventListener('drop', drop, false);
}

function swapBothImage() {
  const images = [
    'https://www.reactiongifs.com/r/bth.gif',
    'https://media1.giphy.com/media/3ohzdMDbNXvnWdeOZi/giphy.gif',
    'https://media2.giphy.com/media/3o85xIO33l7RlmLR4I/giphy.gif',
    'https://media3.giphy.com/media/TtFqXVtOQkomI/giphy.gif',
    'https://media.giphy.com/media/1isdB21HPSkQLGYEil/giphy.gif'
  ];

  imageIndex = (imageIndex === images.length - 1) ? 0 : imageIndex + 1;
  bothImage.setAttribute('src', images[imageIndex]);
}

function dragStart(event) {
  let style = window.getComputedStyle(event.target, null);
  event.dataTransfer.setData("text/plain",
  (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
} 

function drop(event) {
  let offset = event.dataTransfer.getData("text/plain").split(',');
  let uriSplit = event.dataTransfer.getData('text/uri-list').split("/")
  
  if (uriSplit[uriSplit.length-1] === "logo_transparent.png") {
    bothLogo.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    bothLogo.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
  } else {
    bothImage.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    bothImage.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
  }
  
  event.preventDefault();
  return false;
}

function dragOver(event) {
  event.preventDefault();
  return false;
}
