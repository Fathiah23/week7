


var console = document.querySelector('.console');
var images = ['Arcade.png', 'Bridge.png', 'Crochet.png', 'lifeIsBeautiful.png', 'Magazine.png', 'Sunflower.png'];
var i = 0;

function prev() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}


function next() {
    if (i >= images.length - 1) i = -1;
    i++; 
    return setImg();
}


function setImg(){
    return console.setAttribute('src', 'images/' +images[i]);
}
