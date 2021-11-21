const display = document.getElementById('output');
const btnTop = document.getElementById('btnLast');
const btnBottom = document.getElementById('btnNext');

//  The list of images i use and save locally
const image = ['code1','code2','code3','code4','code5','code6','code7'];

//  The unique index i use to define the exact image
let imageIndex = 0;


//  The loadImage function starts by loading the page and provides us with an image
window.addEventListener('load', loadImage(image[imageIndex]));


function loadImage(image){
    display.style.backgroundImage = `url('images/${image}.jpg')`;
    display.style.transition = '2s';
}

//  Top and bottom buttons are connect with functions
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
