const display = document.getElementById('output');
const btnTop = document.getElementById('btnLast');
const btnBottom = document.getElementById('btnNext');
const body = document.querySelector('body');

const image = ['code1','code2','code3','code4','code5','code6','code7'];

let imageIndex = 0;

window.addEventListener('load', loadImage(image[imageIndex]));


function loadImage(image){
    display.style.backgroundImage = `url('images/${image}.jpg')`;
    display.style.transition = '2s';
}


btnTop.addEventListener('click', previmage);
btnBottom.addEventListener('click', nextimage);


// Previous image
function previmage() {
    imageIndex--;
  
    if (imageIndex < 0) {
      imageIndex = image.length - 1;
    }
  
    loadImage(image[imageIndex]);

  }
  
  // Next image
  function nextimage() {
    imageIndex++;
  
    if (imageIndex > image.length - 1) {
      imageIndex = 0;
    }
  
    loadImage(image[imageIndex]);

  }
